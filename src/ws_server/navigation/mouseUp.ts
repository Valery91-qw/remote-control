export function mouseUp(
    params: Array<string>,
    currentPosition: {x: number, y: number},
    moveFunction: (x: number, y: number) => void
) {
    const dist = Number(params[0]);
    moveFunction(currentPosition.x, currentPosition.y - dist)
}