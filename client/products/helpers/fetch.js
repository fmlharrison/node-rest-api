export const asyncFetch = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json
        })
        .catch(err => console.error('SERVER REQUEST FAILED: ' + err))
}