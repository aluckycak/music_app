import server from "..";
export function getBanner() {
    return server({
        method: "GET",
        url: "/banner?type=2"
    })
}
export function getMusicList() {
    return server({
        method: "GET",
        url: "/personalized?limit=10"
    })
}