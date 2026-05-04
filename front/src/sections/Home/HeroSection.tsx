import Section from "../../components/layout/Section";

export function HeroSection () {
    return(
        <>
            <Section theme={'acid'}>
                <div className="font-geist text-8xl font-semibold relative h-screen w-full flex flex-col items-start justify-end p-12">
                    <h1>
                        Creating
                    </h1>
                    <div className="flex flex-row items-start justify-center">
                        <h1 className="text-9xl font-pixelify bg-dark text-acid">
                            any.kind
                        </h1>
                        <h1>
                            ®
                        </h1>
                    </div>
                    <h1>
                        of Things.
                    </h1>
                </div>
            </Section>
        </>
    )
}