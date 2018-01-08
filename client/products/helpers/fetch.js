export const asyncFetch = async (url) => {
    try {
        const res = await fetch(url);
        const jsonResponse = await res.json();
        return jsonResponse;
    } catch (err) {
        console.log(`fetchResponseJson failed:`, e);
    }
}