import React from "react";

type MediaFrameProps = {
    children: React.ReactNode;
    pixelH: string;
    pixelW: string;
    cornerDepth: number;
    frameCol: string;
    bg: string;
    className?: string;
}

export default function MediaFrame( {children, pixelH, pixelW, cornerDepth, frameCol, bg, className=''}: MediaFrameProps ) {
    
    return(
        <>
            <div className="flex flex-col items-stretch justify-start">
                {/* B TOP */}
                <div className="flex flex-row items-start justify-start">
                    {Array.from({length: cornerDepth}).map((unknown, index) => (
                        <div key={index}
                            className={`${pixelH} ${pixelW} ${bg}`}
                        />
                    ))}
                    <div className={`flex-1 ${pixelH} ${frameCol}`}/>
                    {Array.from({length: cornerDepth}).map((unknown, index) => (
                        <div key={index}
                            className={`${pixelH} ${pixelW} ${bg}`}
                        />
                    ))}
                </div>

                {/* MID */}
                <div className="flex flex-row items-stretch justify-start">

                    {/* B LEFT */}
                    <div className="flex flex-col items-start justify-start">
                        {Array.from({length: cornerDepth - 1}).map((unknown, index) => (
                            <div key={index}
                                className={`${pixelH} ${pixelW} ${bg}`}
                            />
                        ))}
                        <div className={`flex-1 ${pixelW} ${frameCol}`}/>
                        {Array.from({length: cornerDepth - 1}).map((unknown, index) => (
                            <div key={index}
                                className={`${pixelH} ${pixelW} ${bg}`}
                            />
                        ))}
                    </div>

                    {/* Main + children */}
                    <div className={`relative ${className}`}>
                        {children}

                        {/* FRAME */}
                        <div className={`absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between`}>

                            {/* TOP PART FRAME */}
                            <div className="w-full flex flex-col items-start justify-start">

                                {/* Lines */}
                                {cornerDepth > 1 && Array.from({length: cornerDepth - 1}).map((unknown, index) => (
                                    <div key={index}
                                        className='w-full flex flex-row items-start justify-between'
                                    >
                                        
                                        {/* Left part */}
                                        <div className="flex flex-row items-start justify-start">

                                            {/* corner pixel line */}
                                            {Array.from({length: cornerDepth - 1}).map((_unknown, _index) => (
                                                <div key={_index}
                                                    className={`${pixelH} ${pixelW} ${bg}`}
                                                />
                                            ))}

                                            {/* border pixel */}
                                            <div className={`${pixelH} ${pixelW} ${frameCol}`}/>
                                        </div>

                                        {/* Right part */}
                                        <div className="flex flex-row items-start justify-start">

                                            {/* border pixel */}
                                            <div className={`${pixelH} ${pixelW} ${frameCol}`}/>

                                            {/* corner pixel line */}
                                            {Array.from({length: cornerDepth - 1}).map((_unknown, _index) => (
                                                <div key={_index}
                                                    className={`${pixelH} ${pixelW} ${bg}`}
                                                />
                                            ))}
                                        </div>

                                        

                                    </div>
                                ))}

                                {/* Bottom frame border line */}
                                <div className="flex w-full flex-row items-start justify-between">

                                    {/* left part */}
                                    <div className="flex flex-row items-start justify-start">
                                        {Array.from({length: cornerDepth}).map((unknown, index) => (
                                            <div key={index}
                                                className={`${pixelH} ${pixelW} ${frameCol}`}
                                            />
                                        ))}
                                    </div>

                                    {/* right part */}
                                    <div className="flex flex-row items-start justify-start">
                                        {Array.from({length: cornerDepth}).map((unknown, index) => (
                                            <div key={index}
                                                className={`${pixelH} ${pixelW} ${frameCol}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                            </div>


                            {/* BOT PART FRAME */}
                            <div className="flex w-full flex-col items-start justify-start">

                                {/* Bottom frame border line */}
                                <div className="flex w-full flex-row items-start justify-between">

                                    {/* left part */}
                                    <div className="flex flex-row items-start justify-start">
                                        {Array.from({length: cornerDepth}).map((unknown, index) => (
                                            <div key={index}
                                                className={`${pixelH} ${pixelW} ${frameCol}`}
                                            />
                                        ))}
                                    </div>

                                    {/* right part */}
                                    <div className="flex flex-row items-start justify-start">
                                        {Array.from({length: cornerDepth}).map((unknown, index) => (
                                            <div key={index}
                                                className={`${pixelH} ${pixelW} ${frameCol}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Lines */}
                                {cornerDepth > 1 && Array.from({length: cornerDepth - 1}).map((unknown, index) => (
                                    <div key={index}
                                        className='flex w-full flex-row items-start justify-between'
                                    >
                                        
                                        {/* Left part */}
                                        <div className="flex flex-row items-start justify-start">

                                            {/* corner pixel line */}
                                            {Array.from({length: cornerDepth - 1}).map((_unknown, _index) => (
                                                <div key={_index}
                                                    className={`${pixelH} ${pixelW} ${bg}`}
                                                />
                                            ))}

                                            {/* border pixel */}
                                            <div className={`${pixelH} ${pixelW} ${frameCol}`}/>
                                        </div>

                                        {/* Right part */}
                                        <div className="flex flex-row items-start justify-start">

                                            {/* border pixel */}
                                            <div className={`${pixelH} ${pixelW} ${frameCol}`}/>

                                            {/* corner pixel line */}
                                            {Array.from({length: cornerDepth - 1}).map((_unknown, _index) => (
                                                <div key={_index}
                                                    className={`${pixelH} ${pixelW} ${bg}`}
                                                />
                                            ))}
                                        </div>

                                        

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* B RIGHT */}
                    <div className="flex flex-col items-start justify-start">
                        {Array.from({length: cornerDepth - 1}).map((unknown, index) => (
                            <div key={index}
                                className={`${pixelH} ${pixelW} ${bg}`}
                            />
                        ))}
                        <div className={`flex-1 ${pixelW} ${frameCol}`}/>
                        {Array.from({length: cornerDepth - 1}).map((unknown, index) => (
                            <div key={index}
                                className={`${pixelH} ${pixelW} ${bg}`}
                            />
                        ))}
                    </div>
                </div>

                {/* B BOT */}
                <div className="flex flex-row items-start justify-start">
                    {Array.from({length: cornerDepth}).map((unknown, index) => (
                        <div key={index}
                            className={`${pixelH} ${pixelW} ${bg}`}
                        />
                    ))}
                    <div className={`flex-1 ${pixelH} ${frameCol}`}/>
                    {Array.from({length: cornerDepth}).map((unknown, index) => (
                        <div key={index}
                            className={`${pixelH} ${pixelW} ${bg}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}