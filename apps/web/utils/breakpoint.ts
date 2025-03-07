export const MakeBreakPoint = (className: string, BreakPoint: string): string => {

    return className.split(' ').map((cls) => `${BreakPoint}:` + cls).join(' ');
}
