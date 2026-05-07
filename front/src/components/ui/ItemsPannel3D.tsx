import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type IP3DProps = {
    items: string[];
    zMaxRotationAngle: number;
    children: (item: string, index: number) => React.ReactNode;
    className?: string;
    itemClassName?: string;
    lang?: string;
}

export default function ItemPannel3D({ items, children, zMaxRotationAngle, className = '', itemClassName = '', lang = 'en' }: IP3DProps) {

    const navigate = useNavigate();

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [rotations, setRotations] = useState<number[]>([]);

    const updateRotations = useCallback(() => {
        const screenMidY = window.innerHeight / 2;

        const newRotations = itemRefs.current.map((el) => {
            if (!el) return 0;
            const rect = el.getBoundingClientRect();
            const elCenterY = rect.top + rect.height / 2;

            const distFromCenter = (elCenterY - screenMidY);
            const normalized = distFromCenter / screenMidY;
            const clamped = Math.max(-1, Math.min(1, normalized));

            return clamped * zMaxRotationAngle;
        });
        setRotations(newRotations);
    }, [zMaxRotationAngle]);

    useEffect(() => {
        updateRotations();
        window.addEventListener("scroll", updateRotations, { passive: true });
        window.addEventListener("resize", updateRotations, { passive: true });
        return () => {
            window.removeEventListener("scroll", updateRotations);
            window.removeEventListener("resize", updateRotations);
        };
    }, [updateRotations]);

    return (
        <div className={`perspective-normal flex ${className}`}>
            {items.map((item, i) => (
                <div
                    key={item}
                    ref={(el) => { itemRefs.current[i] = el; }}
                    className={`cursor-pointer pointer-events-none`}
                    style={{
                        transformOrigin: "right center",
                        transform: `rotateZ(${rotations[i] ?? 0}deg)`,
                        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                        perspective: "800px",
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => navigate('/works/' + item.toLowerCase())}
                >
                    <div
                        className={`pointer-events-auto hover:z-30 ${itemClassName}`}
                        style={{
                            transformOrigin: "right center",
                            transform: `rotateZ(${-(rotations[i] ?? 0)}deg) rotateY(${hoveredIndex === i ? -10 : -25}deg)`,
                            transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                        }}
                        lang={lang}
                    >
                        {children(item, i)}
                    </div>
                </div>
            ))}
        </div>
    );
}