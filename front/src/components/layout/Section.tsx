import React from "react";

import { themeClasses } from "../../utils/themeClasses";

import type { theme } from "../../types/themeType";

type SectionProps = {
    children: React.ReactNode;
    theme: theme;
    className?: string;
    bg?: boolean;
    text?: boolean;
    border?:boolean;
}

export default function Section( {children, theme, className='', bg=true, text=true, border=false}: SectionProps ) {

    const themeClass: string = themeClasses({ theme, bg, text, border });

    return(
        <>
            <div className={`w-full ${themeClass} ${className}`}>
                {children}
            </div>
        </>
    )
}