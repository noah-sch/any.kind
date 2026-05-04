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

                    <ScrollRevealContent className={'w-full'}>
                        <ItemPannel3D items={['leakw.id', 'Fainted', 'YESx3', `FORWARD`, 'EMPTY SPACE']}
                            className={'text-end flex-col items-end justify-start px-4 py-48 overflow-hidden'} 
                            itemClassName={'text-9xl font-black hover:text-halflight hover:[-webkit-text-stroke:2px_black]'}
                        />
                    </ScrollRevealContent>
                </ScrollChildReveal>  
            </Section>

        </div>
    );
}
