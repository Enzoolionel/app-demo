export const fetchData = async (url, opcions) => {
    const res = await fetch(url, opcions)
    const data = await res.json()
    return data
}