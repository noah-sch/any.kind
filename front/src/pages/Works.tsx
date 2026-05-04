import WorksHero from "../sections/Works/WorksHero";
import WS01 from "../sections/Works/WS01";

export default function Works() {
    return(
        <>
            <div className="w-full overflow-auto">
                <WorksHero/>
                <div className="w-full flex flex-col items-start justify-start relative z-10">
                    <WS01/>
                </div>
            </div>
        </>
    )
}