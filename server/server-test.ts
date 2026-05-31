import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import type { Server } from 'node:http';
import { app } from './index.ts';

let server: Server;
let BASE: string;

before(() => {
    server = app.listen(0);
    const addr = server.address();
    const port = typeof addr === 'object' && addr ? addr.port : 0;
    BASE = `http://localhost:${port}`;
});

after(() => {
    server.close();
});

describe('GET /api/v1/target', () => {
    it('returns the ghost', async () => {
        const res = await fetch(`${BASE}/api/v1/target`);
        const body = await res.json();

        assert.equal(res.status, 200);
        assert.equal(body.name, 'Leomuun');
    });
});

describe('GET /api/v1/ghost/:id', () => {
    it('returns the ghost for valid id', async () => {
        const res = await fetch(`${BASE}/api/v1/ghost/h7A`);
        const body = await res.json();

        assert.equal(res.status, 200);
        assert.equal(body.id, 'h7A');
    });

    it('returns 404 for unknown id', async () => {
        const res = await fetch(`${BASE}/api/v1/ghost/wrong`);

        assert.equal(res.status, 404);
    });
});

describe('PATCH /api/v1/ghost/:id', () => {
    it('returns 404 for wrong id', async () => {
        const res = await fetch(`${BASE}/api/v1/ghost/wrong`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'x', flags: [] }),
        });

        assert.equal(res.status, 404);
    });

    it('rejects empty name', async () => {
        const res = await fetch(`${BASE}/api/v1/ghost/h7A`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: '', flags: [] }),
        });

        assert.equal(res.status, 400);
        const body = await res.json();
        assert.equal(body.error, 'FIELD_EMPTY');
    });

    it('rejects invalid characters', async () => {
        const res = await fetch(`${BASE}/api/v1/ghost/h7A`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: '123', flags: [] }),
        });

        assert.equal(res.status, 400);
        assert.equal((await res.json()).error, 'FIELD_INVALID');
    });

    it('updates successfully', async () => {
        const res = await fetch(`${BASE}/api/v1/ghost/h7A`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'y', flags: ['caught'] }),
        });

        assert.equal(res.status, 200);
        const body = await res.json();
        assert.equal(body.name, 'y');
        assert.deepEqual(body.flags, ['editable', 'caught']);
    });
});
