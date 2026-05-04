import { useState } from "react";
import { useNavigate } from "react-router-dom";

type IP3DProps = {
    items: string[];
    className?: string;
    itemClassName?: string;
}

export default function ItemPannel3D({ items, className = '', itemClassName = '' }: IP3DProps) {

    const navigate = useNavigate();

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={`w-full flex ${className}`}>
            {items.map((item, i) => (
                <div
                    key={item}
                    className={`perspective-normal -rotate-x-1 -rotate-y-20 cursor-pointer`}
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => navigate('/works/' + item.toLowerCase())}
                >
                    <div className={`flex flex-row items-center justify-start ${itemClassName}`}
                        style={{
                            transformOrigin: "right center",
                            transform: hoveredIndex === i ? "rotateY(8deg) rotateX(1deg)" : "rotateY(0deg)",
                            transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                        }}
                    >
                        <span className="font-normal">
                            /
                        </span>
                        {item.toUpperCase()}
                    </div>
                </div>
            ))}
        </div>
    );
}
