import Section from "../../components/layout/Section";
import ExploreSectionTicket from "../../components/ui/ExploreSectionTicket";

export default function HS03() {
    return(
        <>
            <Section theme={'halflight'} className="w-full">
                <div className="flex flex-col items-center justify-center pt-48">
                    <h1 className="font-pixelify text-[16rem] leading-[0.8] inline pb-24">
                        <span className="font-sans text-[13rem] text-orng font-thin align-top">
                            /
                        </span>
                        Explore
                    </h1>

                    <div className="w-full grid grid-cols-3 px-24">
                        {Array.from({length: 3}).map((unknown, index) => (
                            <ExploreSectionTicket title={'coucou'}
                                imgUrl={'oui'}
                                description={'test'}
                            >
                                <div className="w-full flex flex-row items-center justify-end">
                                    {index}
                                </div>
                            </ExploreSectionTicket>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}