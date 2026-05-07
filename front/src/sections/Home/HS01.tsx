import Section from "../../components/layout/Section";
import ScrollRevealEffect from "../../components/ui/ScrollRevealEffect";
import PixelTicket from "../../components/ui/PixelTicket";

export default function HS01() {
    return(
        <>
            <Section theme={'halflight'}>
                <div className="w-full grid grid-cols-4 pt-48 px-12">

                    <div className="col-span-2 col-start-1 flex items-center justify-center">
                        <div className="inline font-pixelify text-5xl">
                            <span className="text-orng">
                                What 
                            </span>
                            <span>
                                &nbsp;is this ? 
                            </span>
                        </div>
                    </div>

                    <div className="col-span-2 col-start-3 flex flex-col items-start justify-center">
                        <PixelTicket pixelH={'h-4'}
                            pixelW={'w-4'} 
                            nbPixels={3}
                            missingPixels={[
                                [0],
                                [1, 2, 5],
                                [3, 4, 8],
                                [0, 4, 6]
                            ]}
                            pxCol={'bg-dark'}
                            childrenClassName={'bg-dark text-light'}
                        >
                            <ScrollRevealEffect text={'Created as a central hub for my work, this website allows me to organize my projects, follow their progress over time, and stay focused on turning ideas into finished results. '}
                                className={'font-geist text-6xl font-medium'}
                            />
                        </PixelTicket>
                    </div>

                </div>
            </Section>
        </>
    )
}