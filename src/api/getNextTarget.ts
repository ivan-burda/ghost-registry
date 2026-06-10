import { BASE_URL } from './baseUrl.ts';

export const getNextTarget = async () => {
    const response = await fetch(`${BASE_URL}/api/v1/target`);

    if (!response.ok) {
        throw new Error('Failed to fetch target');
    }

    return response.json();
}