import Section from "../../components/layout/Section";
import GithubProfile from "../../components/ui/GithubProfile";

export function HeroSection () {
    return(
        <>
            <Section theme={'halflight'}>
                <div className="relative font-geist text-8xl font-semibold h-screen w-full flex flex-col items-start justify-end p-12">
                    <h1>
                        Creating
                    </h1>
                    <div className="flex flex-row items-start justify-center">
                        <h1 className="text-9xl font-pixelify text-orng">
                            any.kind
                        </h1>
                        <h1>
                            ®
                        </h1>
                    </div>
                    <h1>
                        of Things.
                    </h1>
                    <div className="absolute top-0 right-0 p-8">
                        <GithubProfile/>
                    </div>
                </div>
            </Section>
        </>
    )
}