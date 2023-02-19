import * as fs from 'node:fs'

export function write(path: string, data: string) {
    fs.writeFileSync(path, data);
    return (`${path}:${data}`);
}

export function read(path: string) {
    return (`${path}:${fs.readFileSync(path, 'utf-8')}`)
}