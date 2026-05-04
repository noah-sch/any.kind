import type { theme } from "../types/themeType";

type themeClassesProps = {
    theme: theme;
    bg?: boolean;
    text?: boolean;
    border?: boolean;
}

const bgMap: Record<string, string> = {
    dark: 'bg-dark',
    light: 'bg-light',
    halflight: 'bg-halflight',
    acid: 'bg-acid',
    cream: 'bg-cream',
};

const textMap: Record<string, string> = {
    dark: 'text-light selection:bg-light selection:text-dark',
    light: 'text-dark selection:bg-dark selection:text-light',
    halflight: 'text-dark selection:bg-dark selection:text-halflight',
    acid: 'text-dark selection:bg-dark selection:text-acid',
    cream: 'text-dark selection:bg-dark selection:text-cream',
};

const borderMap: Record<string, string> = {
    dark: 'border-light',
    light: 'border-dark',
    halflight: 'border-dark',
    acid: 'border-dark',
    cream: 'border-dark',
};

export const themeClasses = ( {theme, bg=false, text=false, border=false}: themeClassesProps ): string => {
    let classes: string = '';
    if (bg) classes += bgMap[theme] + ' ';
    if (text) classes += textMap[theme] + ' ';
    if (border) classes += borderMap[theme] + ' ';
    return classes;
}