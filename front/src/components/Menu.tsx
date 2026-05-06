import { useState } from "react";
import { useNavigate } from "react-router-dom";

import WordHoverEffect from "./ui/WordHoverEffect";

export default function Menu() {

    const [language, setLanguage] = useState<"EN" | "FR">("EN");

    const navigate = useNavigate();

    return(
        <>
            <div className="fixed top-20 left-1/2 w-[21.5vw] flex flex-col items-start justyfy-start bg-dark text-light z-50 p-8">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="font-pixelify text-xl font-semibold cursor-pointer">
                        any.kind
                    </div>
                    <div className="font-ibm flex flex-col items-start justify-start gap-1.5">
                        {["Home", "Works", "Blog", "Contact", "404"].map((page) => (
                            <>
                                <div className="text-md font-semibold"
                                    onClick={() => navigate((page.toLowerCase() === 'home' ? '' : page.toLowerCase()))}
                                >
                                    <WordHoverEffect word={page} />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-end justify-start gap-1.5">
                        <div className="font-geist text-lg font-bold cursor-pointer hover:bg-light hover:text-dark">
                            hello@any.kind.com
                        </div>
                    </div>
                    <div className="font-geist flex flex-row items-center justify-start gap-2 text-sm font-semibold">
                        <div className={`border-b ${language === "EN" ? "border-b-light" : "border-b-dark"}`}
                            onClick={() => setLanguage("EN")}
                        >
                            <WordHoverEffect word={"EN"}/>
                        </div>
                        <div className={`border-b ${language === "FR" ? "border-b-light" : "border-b-dark"}`}
                            onClick={() => setLanguage("FR")}
                        >
                            <WordHoverEffect word={"FR"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}