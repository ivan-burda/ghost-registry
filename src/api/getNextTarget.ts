export const getNextTarget = async () => {
    const response = await fetch('http://localhost:3001/api/v1/target');

    if (!response.ok) {
        throw new Error('Failed to fetch target');
    }

    return response.json();
}