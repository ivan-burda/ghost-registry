export const getSingleGhost = async (id:string) => {
    const response = await fetch(`http://localhost:3001/api/v1/ghost/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch target');
    }

    return response.json();
};