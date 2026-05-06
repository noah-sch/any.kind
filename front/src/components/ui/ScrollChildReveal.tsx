import { useState, useEffect, useRef, createContext, useContext } from "react"
import React from "react"

const ScrollRevealContext = createContext({isRevealed: false});

type ScrollRevealProps = {
    children: React.ReactNode;
    className?: string;
}


export function ScrollChildReveal( {children, className='', ...props}: ScrollRevealProps ) {
    
    const [isRevealed, setIsRevealed] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const registerTrigger = (el: HTMLDivElement | null) => {
        ref.current = el;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            setIsRevealed(ref.current.getBoundingClientRect().top <= 0);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        handleScroll();
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return(
        <>
            <ScrollRevealContext.Provider value={{isRevealed}}>
                <div ref={ref}
                    className={className}
                    {...props}
                >
                    {children}
                </div>
            </ScrollRevealContext.Provider>
        </>
    )
}

export function ScrollRevealContent( {children, className=''}: React.HTMLAttributes<HTMLDivElement>) {
    const {isRevealed} = useContext(ScrollRevealContext);

    if (!isRevealed) return null;
    return(
        <>
            <div className={className}>
                {children}
            </div>
        </>
    )
}

export function ScrollHideContent( {children, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    const {isRevealed} = useContext(ScrollRevealContext);

    if (isRevealed) return null;
    return(
        <>
            <div {...props}>
                {children}
            </div>
        </>
    )
}