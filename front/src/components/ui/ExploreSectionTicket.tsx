import React from "react";
import { useNavigate } from "react-router-dom";

import PixelTicket from "./PixelTicket";
import MediaFrame from "./MediaFrame";

type ESTProps = {
    title: string;
    imgUrl: string;
    description: string;
    nav: string;
    children?: React.ReactNode;
    className?: string;
    ticketClassName?: string;
}

export default function ExploreSectionTicket( {title, imgUrl, description, nav, children, className='', ticketClassName=''}: ESTProps ) {

    const navigate = useNavigate();
    
    return(
        <>
            <div className={`flex flex-col items-center justify-start ${className}`}>
                <PixelatedArrow height={5}
                    pixelH={'h-[3px]'}
                    pixelW={'w-[3px]'}
                    borderCol={'bg-dark'}
                    bgCol={'bg-orng'}
                    className={'duration-300 group-hover:translate-y-8 z-30'}
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
                    pxCol={'bg-white group-hover:bg-orng/50'}
                    className={'duration-300 cursor-pointer group-hover:scale-110'}
                    childrenClassName={`bg-white ${ticketClassName}`}
                    handleClick={() => navigate(nav)}
                >
                    <div className="flex flex-col items-center justify-start gap-8">
                        {children}
                        <div className="w-full flex items-center justify-center">
                            <MediaFrame pixelH="h-[2px]"
                                pixelW="w-[2px]"
                                cornerDepth={3}
                                frameCol="bg-dark"
                                bg='bg-white'
                                className="h-20 w-20"
                            >
                                <img src={`../../../medias/${imgUrl}`} alt="" />
                            </MediaFrame>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-2">
                            <div className="font-pixelify text-2xl font-medium text-center leading-none">
                                {title}
                            </div>
                            <div className="font-geist text-lg text-center">
                                {description}
                            </div>
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
    className?: string;
}

function PixelatedArrow ( {height, pixelH, pixelW, borderCol, bgCol, className=''}: PAProps ) {

    const rowLength: number = height * 2 + 1;
    
    return(
        <>
            <div className={`flex flex-col items-center justify-center animate-bounce ${className}`}> {/* animation à changer plus tard probablement */}
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