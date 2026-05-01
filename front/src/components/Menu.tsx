import { useState } from "react";

import WordHoverEffect from "./ui/WordHoverEffect";

export default function Menu() {

    const [language, setLanguage] = useState<"EN" | "FR">("EN");

    return(
        <>
            <div className="fixed top-20 left-1/2 w-[21.5vw] flex flex-col items-start justyfy-start bg-black text-neutral-100 z-50 p-8">
                <div className="flex w-full flex-col items-start justify-start gap-8">
                    <div className="font-pixelify text-xl font-semibold cursor-pointer">
                        any.kind
                    </div>
                    <div className="font-ibm flex flex-col items-start justify-start gap-1.5">
                        {["home", "works", "blog", "contact", "404"].map((page) => (
                            <>
                                <div className="text-sm font-semibold">
                                    <WordHoverEffect word={page.toUpperCase()} />
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-end justify-start gap-1.5">
                        <div className="font-sora text-lg font-bold cursor-pointer hover:bg-neutral-100 hover:text-black">
                            HELLO@ANY.KIND.COM
                        </div>
                    </div>
                    <div className="font-ibm flex flex-row items-center justify-start gap-2 text-sm font-semibold">
                        <div className={`border-b ${language === "EN" ? "border-b-neutral-100" : "border-b-black"}`}
                            onClick={() => setLanguage("EN")}
                        >
                            <WordHoverEffect word={"EN"}/>
                        </div>
                        <div className={`border-b ${language === "FR" ? "border-b-neutral-100" : "border-b-black"}`}
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