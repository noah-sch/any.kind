import Section from "../../components/layout/Section";

export default function WorksHero() {
    return(
        <>
            <Section theme={'halflight'} className={'fixed top-0 left-0 z-0'}>
                <div className="w-full flex flex-col items-start justify-start overflow-hidden">
                    <div className="w-full h-screen flex flex-col items-center justify-end">
                        <h1 className="font-pixelify text-[20rem] leading-[0.8] inline">
                            <span className="font-sans text-[16rem] text-orng font-thin align-top">
                                /
                            </span>
                            Works
                        </h1>
                    </div>
                </div>
            </Section>
        </>
    )
}