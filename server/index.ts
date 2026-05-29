import express from 'express';
import type { Request } from 'express-serve-static-core';
import cors from 'cors';

const app = express();
export { app };

const PORT = 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const ghost = {
    id: 'h7A',
    name: 'Leomuun',
    classification: 'Class IV',
    firstSeen: '2026-05-19',
    flags: ['editable'],
};

app.get('/api/v1/target', (__, res) => {
    res.json({ ...ghost });
});

app.get('/api/v1/ghost/:id', (req, res) => {
    const { id } = req.params;

    if (ghost.id !== id) {
        return res.status(404).json({ error: 'NOT_FOUND' });
    }

    res.json({ ...ghost });
});

app.patch('/api/v1/ghost/:id', (req: Request<{ id: string }, {}, { name: string, flags: string[] }>, res) => {
    const { id } = req.params;

    if (ghost.id !== id) {
        return res.status(404).json({ error: 'NOT_FOUND' });
    }

    if (ghost.flags.includes('editable') === false) {
        return res.status(405).json({ error: 'NOT_ALLOWED' });
    }

    const { name, flags } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({ error: 'FIELD_EMPTY', attr: 'name' });
    }

    if (name.trim().length > 10) {
        return res.status(400).json({ error: 'FIELD_MISSING', attr: 'name' });
    }

    if (/[^a-zA-Z ]/.test(name)) {
        return res.status(400).json({ error: 'FIELD_INVALID', attr: 'name' });
    }

    const updated = ['editable'];

    if (flags?.includes('caught')) {
        updated.push('caught');
    }

    ghost.flags = updated;
    ghost.name = name;

    res.json({ ...ghost });
});

if (process.argv[1] === import.meta.filename) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
