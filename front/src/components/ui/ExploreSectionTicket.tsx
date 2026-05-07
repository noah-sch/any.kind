import React from "react";

import PixelTicket from "./PixelTicket";

type ESTProps = {
    title: string;
    imgUrl: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

export default function ExploreSectionTicket( {title, imgUrl, description, children, className=''}: ESTProps ) {
    
    return(
        <>
            <div className="flex flex-col items-center justify-start p-24">
                <PixelatedArrow height={5}
                    pixelH={'h-[3px]'}
                    pixelW={'w-[3px]'}
                    borderCol={'bg-dark'}
                    bgCol={'bg-orng'}
                />

                <PixelTicket pixelH={'h-4'}
                    pixelW={'w-4'}
                    nbPixels={1}
                    missingPixels={[
                        [],
                        [],
                        [],
                        [0]
                    ]}
                    pxCol={'bg-white'}
                    className="bg-white"
                >
                    <div className="flex flex-col items-center justify-start">
                        {children}
                        <div className="w-full flex items-center justify-center">
                            <img src={`../../../medias/${imgUrl}`} alt="" />
                        </div>
                        <div className="font-pixelify text-xl">
                            {title}
                        </div>
                        <div className="font-geist text-center">
                            {description}
                        </div>
                    </div>
                </PixelTicket>
            </div>
        </>
    )
}

type PAProps = {
    height: number;
    pixelH: string;
    pixelW: string;
    borderCol: string;
    bgCol: string;
}

function PixelatedArrow ( {height, pixelH, pixelW, borderCol, bgCol}: PAProps ) {

    const rowLength: number = height * 2 + 1;
    
    return(
        <>
            <div className="flex flex-col items-cente justify-center animate-bounce"> {/* animation à changer plus tard probablement */}
                {/* TOP */}
                <div className="w-full flex flex-row items-center justify-center">
                    {Array.from({length: rowLength * 2 }).map((unknown, index) => (
                        <div key={index}
                            className={`${pixelH} ${pixelW} ${borderCol}`}
                        />
                    ))}
                </div>
                
                {/* Main */}
                {Array.from({length: height}).map((unknown, index) => (
                    <div key={index}
                        className='w-full flex flex-col items-center justify-center'
                    >
                        <div className={`w-full flex flex-row items-center justify-center`}>
                            {Array.from({length: index === 0 ? ((height - index) * 2 + 1) * 2 : ((height - index) * 2 + 1) * 2 + 4}).map((_unknown, _index) => (
                                <div key={_index}
                                    className={`${pixelH} ${pixelW} ${index === 0 
                                        ? (_index === 0 || _index === ((height - index) * 2 + 1) * 2 - 1) ? borderCol : bgCol
                                        : (_index === 0 || _index === 1 || _index === 2 || _index === ((height - index) * 2 + 1) * 2 + 1 || _index === ((height - index) * 2 + 1) * 2 + 2 || _index === ((height - index) * 2 + 1) * 2 + 3) ? borderCol : bgCol}`}
                                />
                            ))}
                        </div>
                        <div className={`w-full flex flex-row items-center justify-center`}>
                            {Array.from({length: ((height - index) * 2 + 1) * 2}).map((_unknown, _index) => (
                                <div key={_index}
                                    className={`${pixelH} ${pixelW} ${(_index === 0 || _index === (height - index) * 4 + 1) ? borderCol : bgCol}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {/* BOT */}
                <div className="w-full flex flex-row items-center justify-center">
                    {Array.from({length: 6}). map((unknown, index) => (
                        <div key={index}
                            className={`${pixelH} ${pixelW} ${borderCol}`}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}