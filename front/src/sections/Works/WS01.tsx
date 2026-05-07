import Section from "../../components/layout/Section";
import ItemPannel3D from "../../components/ui/ItemsPannel3D";
import { ScrollChildReveal, ScrollRevealContent } from "../../components/ui/ScrollChildReveal";

export default function WS01() {
    

    return (
        <div className="w-full flex flex-col items-start justify-start">

            {/* PADDING SCROLL */}
            <div className="w-full h-[140vh] bg-transparent" />

            {/* MAIN */}
            <Section theme={"halflight"}>

                <ScrollChildReveal className="w-full min-h-[101vh] flex flex-col items-start justify-start">
                    <div className="font-pixelify text-xl w-full h-screen flex flex-row items-start justify-center">
                        Scroll up to reveal projects
                    </div>

                    <ScrollRevealContent className={'w-full flex flex-col items-end '}>
                        <ItemPannel3D items={['leakw.id', 'FAINTED', 'YESx3', `FAST FORWARD`, 'EMPTY SPACE', 'PUSH PULL SKIP', 'OZM MAX TRAINED']}
                            zMaxRotationAngle={60}
                            className={'max-w-3/4 text-end flex-col items-end justify-start px-4 py-48 overflow-hidden'} 
                            itemClassName={'font-archivo break-words hyphens-auto text-[10rem] leading-[0.8] p-2 group'}
                            lang={'fr'}
                        >
                            {(item, i) => (
                                <div key={i} 
                                    className="h-auto inline"
                                >
                                    <span className="text-xl align-top text-orng">
                                        [{i + 1}]
                                    </span>
                                    <span className="font-sans align-top text-[8rem] font-thin">
                                        /
                                    </span>
                                    <span className="group-hover:text-halflight group-hover:[-webkit-text-stroke:2px_#E07A5F]">
                                        {item}
                                    </span>
                                </div>
                            )}
                        </ItemPannel3D>
                    </ScrollRevealContent>
                    <div className="w-full h-screen">

                    </div>
                </ScrollChildReveal>  
            </Section>

        </div>
    );
}
