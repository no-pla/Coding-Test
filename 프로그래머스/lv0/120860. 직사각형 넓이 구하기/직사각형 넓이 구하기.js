function solution(dots) {
    let [a, b, c, d] = dots
    let lat = Math.max(a[0], b[0], c[0], d[0]) - Math.min(a[0], b[0], c[0], d[0]);
    let lot = Math.max(a[1], b[1], c[1], d[1]) - Math.min(a[1], b[1], c[1], d[1])
    return lat * lot;
}