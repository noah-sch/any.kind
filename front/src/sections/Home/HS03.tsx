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

                    <div className="w-full flex flex-row items-start justify-center gap-24">
                        {[
                            {
                                categCount: 2,
                                categ: 'projects',
                                title: 'Works',
                                imgUrl: 'webIcon.png',
                                description: `All what I've built`,
                                nav: 'works',
                                p: 'pb-24'
                            },
                            {
                                categCount: 4,
                                categ: 'articles',
                                title: 'Blog',
                                imgUrl: 'webIcon.png',
                                description: `Things I wanted to write`,
                                nav: 'blog',
                                p: 'pt-24'
                            },
                            {
                                categCount: 2,
                                categ: 'features',
                                title: 'Upcomming projects',
                                imgUrl: 'webIcon.png',
                                description: `Things I'm currently working on`,
                                nav: 'works',
                                p: 'pb-24'
                            }
                        ].map((ticket, index) => (
                            <ExploreSectionTicket title={ticket.title}
                                imgUrl={ticket.imgUrl}
                                description={ticket.description}
                                nav={ticket.nav}
                                className={`col-span-1 gap-6 ${ticket.p} group`}
                                ticketClassName="w-48"
                            >
                                <div className="w-full flex flex-row items-center justify-end">
                                    <span className="font-geist font-medium">
                                        {ticket.categCount} {ticket.categ}
                                    </span>
                                </div>
                            </ExploreSectionTicket>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}