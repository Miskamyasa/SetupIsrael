export function locatizePath(path: string) {
    const { locale } = window.__NEXT_DATA__;
    return `/${locale}${path}`;
}
