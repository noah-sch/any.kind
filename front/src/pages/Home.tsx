import { HeroSection } from "../sections/Home/HeroSection";
import HS01 from "../sections/Home/HS01";
import HS03 from "../sections/Home/HS03";
import HS04 from "../sections/Home/HS04";

export default function Home() {
    return(
        <>
            <div className="w-full flex flex-col items-start justify-start">
               <HeroSection/>
               <HS01/>

               <HS03/>
               <HS04/>
            </div>
        </>
    )
}