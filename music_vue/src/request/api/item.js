import server from ".."
export function getMustItemList(data) {
    return server({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}
export function getItemList(data) {
    return server({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}
