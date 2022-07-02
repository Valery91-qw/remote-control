export function parseMessage(msg: Buffer): {command: string, params: Array<string>} {
    const string = msg.toString();
    const [command, ...params] = string.split(' ')
    return {command, params}
}