export function mouseLeft(
    params: Array<string>,
    currentPosition: {x: number, y: number},
    moveFunction: (x: number, y: number) => void
) {
    const dist = Number(params[0]);
    moveFunction(currentPosition.x - dist, currentPosition.y)
}