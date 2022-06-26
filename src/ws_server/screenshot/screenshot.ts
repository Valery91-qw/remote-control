import Jimp from 'jimp';
import {Bitmap} from "robotjs";

export function screenshot (
    position: { x: number; y: number },
    capture: (x?: number, y?: number, width?: number, height?: number) => Bitmap
) {
    const screen = capture(position.x, position.y, 200, 200);
    return new Jimp({data: screen.image})
}