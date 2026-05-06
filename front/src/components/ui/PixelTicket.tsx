import React from "react";

type PixelTicketProps = {
    pixelH: string;
    pixelW: string;
    nbPixels: number
    missingPixels: [number[], number[], number[], number[]];
    pxCol: string;
    children: React.ReactNode;
    className?: string;
}

export default function PixelTicket( {pixelH, pixelW, nbPixels,missingPixels, pxCol, children, className=''}: PixelTicketProps ) {
    
    const grid = missingPixels.map((missingListCorner) =>
        Array.from({ length: nbPixels }, (_, y) =>
            Array.from({ length: nbPixels }, (_, x) => !missingListCorner.includes(y * nbPixels + x))
        )
    );

    const pxClass: string = pixelH + ' ' + pixelW;
    const pxRowClass: string = pixelH + ' w-full ' + pxCol + ' ';
    const pxColClass: string = pixelW + ' h-full ' + pxCol + ' ';

    return(
        <>
            <div className={`h-full flex flex-col items-start justify-start`}>

                {/* TOP SIDE */}
                <div className="w-full flex flex-row items-start justify-start">

                    {/* CORNER TL */}
                    <div className="flex flex-col items-start justify-start">
                        {grid[0].map((row, index) => (
                            <div key={index}
                                className="flex flex-row items-start justify-start"
                            >
                                {row.map((pixel, index) => (
                                    <div key={index}
                                        className={`${pxClass} ${pixel ? pxCol : 'bg-transparent'}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* TOP ROW */}
                    <div className="w-full flex flex-col items-start justify-start">
                        {grid[0].map((row, index) => (
                            <div key={index}
                                className={pxRowClass}
                            />
                        ))}
                    </div>

                    {/* CORNER TR */}
                    <div className="flex flex-col items-start justify-start">
                        {grid[1].map((row, index) => (
                            <div key={index}
                                className="flex flex-row items-start justify-start"
                            >
                                {row.map((pixel, index) => (
                                    <div key={index}
                                        className={`${pxClass} ${pixel ? pxCol : 'bg-transparent'}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* MID SIDE */}
                <div className="h-full w-full flex flex-row items-start justify-start">

                    {/* LEFT COL */}
                    <div className="h-full flex flex-row items-start justify-start">
                        {grid[3].map((col, index) => (
                            <div key={index}
                                className={pxColClass}
                            />
                        ))}
                    </div>

                    {/* content */}
                    <div className={`h-full w-full ${className}`}>
                        {children}
                    </div>

                    {/* RIGHT COL */}
                    <div className="h-full flex flex-row items-start justify-start">
                        {grid[1].map((col, index) => (
                            <div key={index}
                                className={pxColClass}
                            />
                        ))}
                    </div>
                </div>

                {/* BOT SIDE */}
                <div className="w-full flex flex-row items-start justify-start">

                    {/* CORNER BL */}
                    <div className="flex flex-col items-start justify-start">
                        {grid[3].map((row, index) => (
                            <div key={index}
                                className="flex flex-row items-start justify-start"
                            >
                                {row.map((pixel, index) => (
                                    <div key={index}
                                        className={`${pxClass} ${pixel ? pxCol : 'bg-transparent'}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* BOT ROW */}
                    <div className="w-full flex flex-col items-start justify-start">
                        {grid[2].map((row, index) => (
                            <div key={index}
                                className={pxRowClass}
                            />
                        ))}
                    </div>

                    {/* CORNER BR */}
                    <div className="flex flex-col items-start justify-start">
                        {grid[2].map((row, index) => (
                            <div key={index}
                                className="flex flex-row items-start justify-start"
                            >
                                {row.map((pixel, index) => (
                                    <div key={index}
                                        className={`${pxClass} ${pixel ? pxCol : 'bg-transparent'}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}