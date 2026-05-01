import { useState } from "react";

import WordHoverEffect from "../ui/WordHoverEffect";
import Menu from "../Menu";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    return(
        <>
            {showMenu && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                    <Menu />
                </>
            )}

            <div className="fixed top-0 left-0 w-full grid grid-cols-2 z-40 mix-blend-difference pt-6">

                {/* logo */}
                <div className="col-span-1 flex flex-row justify-start items-center pl-10">
                    <span className="font-pixelify text-4xl text-white font-semibold cursor-pointer">
                        any.kind
                    </span>
                </div>

                {/* menu */}
                <div className="col-span-1 flex flex-row justify-start items-end">
                    <div className="relative flex flex-row justify-start items-center group cursor-pointer overflow-visible"
                        onClick={() => setShowMenu(prev => !prev)}
                    >
                        <span className={`text-white ${showMenu && 'rotate-45'} transition-transform duration-300 group-hover:rotate-45`}>
                            <svg width="auto" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 5v14M5 12h14"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <span className="font-ibm text-white -translate-y-2px text-md font-semibold">
                            {showMenu ? (
                                <span>
                                    MENU
                                </span>
                            ) : (
                                <WordHoverEffect word={"MENU"} />
                            )}
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}