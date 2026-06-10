import { BASE_URL } from './baseUrl.ts';

export const getSingleGhost = async (id:string) => {
    const response = await fetch(`${BASE_URL}/api/v1/ghost/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch target');
    }

    return response.json();
};