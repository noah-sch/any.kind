import { useRef, useEffect} from "react";

type ScrollRevealEffectProps = {
    text:string;
    className?:string;
    pauseAfter?: number;   // index de lettre (0-based) après lequel insérer une pause
    pauseDuration?: number; // fraction du range de scroll dédié à la pause (défaut 0.2)
}

export default function ScrollRevealEffect( {text, className, pauseAfter, pauseDuration}: ScrollRevealEffectProps ) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<HTMLSpanElement[]>([]);

  const totalLetters = text.replace(/ /g, "").length;

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight;
      const end = -rect.height;
      const rawProgress = 1 - (rect.top - end) / (start - end);
      const progressStart = 0.3;
      const progressEnd = 0.6;
      const progress = Math.min(1, Math.max(0, (rawProgress - progressStart) / (progressEnd - progressStart)));

      const hasPause = pauseAfter !== undefined;
      const pd = pauseDuration ?? 0.2;
      const effectiveProgress = hasPause ? progress * (1 + pd) : progress;

      spansRef.current.forEach((span, i) => {
        let ls: number;
        let le: number;

        if (hasPause) {
          const boundary = (pauseAfter! + 1) / totalLetters;
          const rawS = i / totalLetters;
          const rawE = (i + 1) / totalLetters;
          ls = rawS < boundary ? rawS : rawS + pd;
          le = rawE <= boundary ? rawE : rawE + pd;
        } else {
          ls = i / totalLetters;
          le = (i + 1) / totalLetters;
        }

        const lp = Math.min(1, Math.max(0, (effectiveProgress - ls) / (le - ls)));
        span.style.opacity = String(0.3 + 0.7 * lp);
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalLetters, pauseAfter, pauseDuration]);

  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className ?? ''}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.3em]">
          {word.split("").map((letter, li) => {
            const idx = letterIndex++;
            return (
              <span
                key={li}
                ref={(el) => { if (el) spansRef.current[idx] = el; }}
                style={{ opacity: 0.3 }}
              >
                {letter}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}