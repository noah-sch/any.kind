import { HeroSection } from "../sections/Home/HeroSection";
import HS01 from "../sections/Home/HS01";

export default function Home() {
    return(
        <>
            <div className="w-full flex flex-col items-start justify-start">
               <HeroSection/>
               <HS01/>

            </div>
        </>
    )
}