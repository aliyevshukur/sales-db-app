export function splitAtFirstUppercase(str: string): string {
    const match = str.slice(1).match(/[A-Z]/);
    if (!match) return str;

    const index = match.index! + 1;
    const firstText = str.slice(0, index);
    const secondText = str.slice(index);
    return `${firstText} ${secondText}`;
}