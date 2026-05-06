import Section from "../components/layout/Section";

export default function NotFound404() {
    return(
        <>
            <Section theme={'cream'} className={'px-8 pt-20'}>
                <div className="text-2xl w-full h-screen flex ">
                    <div className="font-pixelify text-[20rem] font">
                        404
                    </div>
                    <span className="font-geist">
                        The link you followed doesn't lead &nbsp;
                    </span>
                    <span className="font-pixelify text-3xl">
                        any.where
                    </span>
                </div>
            </Section>
        </>
    )
}