import React from "react";

type PixelTicketProps = {
    pixelH: string;
    pixelW: string;
    nbPixels: number
    missingPixels: [number[], number[], number[], number[]];
    pxCol: string;
    children: React.ReactNode;
    className?: string;
    childrenClassName?: string;
    handleClick?: (arg?: undefined) => void;
}

export default function PixelTicket( {pixelH, pixelW, nbPixels,missingPixels, pxCol, children, className='', childrenClassName='', handleClick=()=>{}}: PixelTicketProps ) {
    
    const grid = missingPixels.map((missingListCorner) =>
        Array.from({ length: nbPixels }, (_, y) =>
            Array.from({ length: nbPixels }, (_, x) => !missingListCorner.includes(y * nbPixels + x))
        )
    );

    const pxClass = `${pixelH} ${pixelW}`;
    const pxRowClass = `${pixelH} w-full ${pxCol}`;
    const pxColClass = `${pixelW} h-full ${pxCol}`;

    return (
        <div className={`inline-grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto] ${className}`}
            onClick={() => handleClick()}
        >

            {/* TOP LEFT */}
            <div className="flex flex-col">
                {grid[0].map((row, i) => (
                    <div key={i} className="flex">
                        {row.map((pixel, j) => (
                            <div
                                key={j}
                                className={`${pxClass} ${pixel ? pxCol : "bg-transparent"}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* TOP */}
            <div className="flex flex-col">
                {grid[0].map((_, i) => (
                    <div key={i} className={pxRowClass} />
                ))}
            </div>

            {/* TOP RIGHT */}
            <div className="flex flex-col">
                {grid[1].map((row, i) => (
                    <div key={i} className="flex">
                        {row.map((pixel, j) => (
                            <div
                                key={j}
                                className={`${pxClass} ${pixel ? pxCol : "bg-transparent"}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* LEFT */}
            <div className="flex">
                {grid[3].map((_, i) => (
                    <div key={i} className={pxColClass} />
                ))}
            </div>

            {/* CONTENT */}
            <div className={childrenClassName}>
                {children}
            </div>

            {/* RIGHT */}
            <div className="flex">
                {grid[1].map((_, i) => (
                    <div key={i} className={pxColClass} />
                ))}
            </div>

            {/* BOTTOM LEFT */}
            <div className="flex flex-col">
                {grid[3].map((row, i) => (
                    <div key={i} className="flex">
                        {row.map((pixel, j) => (
                            <div
                                key={j}
                                className={`${pxClass} ${pixel ? pxCol : "bg-transparent"}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* BOTTOM */}
            <div className="flex flex-col">
                {grid[2].map((_, i) => (
                    <div key={i} className={pxRowClass} />
                ))}
            </div>

            {/* BOTTOM RIGHT */}
            <div className="flex flex-col">
                {grid[2].map((row, i) => (
                    <div key={i} className="flex">
                        {row.map((pixel, j) => (
                            <div
                                key={j}
                                className={`${pxClass} ${pixel ? pxCol : "bg-transparent"}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}