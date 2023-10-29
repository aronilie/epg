export const getAllChannelsAndPrograms = async () => {
    try {
        const response = await fetch('http://localhost:1337/epg');
        const data = await response.json();
        return data;
    } catch {
        throw new Error('An error occurred when obtaining data.');
    }
};
