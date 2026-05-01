type WHEProps = {
    word: string;
}

export default function WordHoverEffect( {word}: WHEProps ) {

  return (
    <div className="w-full group flex cursor-pointer">
        {word.split("").map((char, i) => {
            if (char === " ") {
                return (
                    <span key={i} className="inline-block w-[0.4em]" />
                );
            }

            return (
                <span key={i} className="relative inline-block overflow-hidden">
        
                    {/* top */}
                    <span
                        className="block transition-transform duration-300 group-hover:translate-y-full"
                        style={{ transitionDelay: `${i * 50}ms` }}
                    >
                        {char}
                    </span>

                    {/* bottom */}
                    <span
                        className="absolute left-0 top-0 -translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                        style={{ transitionDelay: `${i * 50}ms` }}
                    >
                        {char}
                    </span>

                </span>
            );
        })}
    </div>
  );
}