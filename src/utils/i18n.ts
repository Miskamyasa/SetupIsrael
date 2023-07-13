export function localizePath(path: string) {
    const [, ...splitPath] = path.split("/")
    // TODO: implement
    return `/${splitPath.join("/")}`
}
