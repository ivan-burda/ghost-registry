export const updateGhost = async (
    id: string,
    data: Partial<{ name: string; flags: string[] }>,
) => {
    const response = await fetch(`http://localhost:3001/api/v1/ghost/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to update ghost');
    }

    return response.json();
};