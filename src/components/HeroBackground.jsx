import { useEffect, useState } from "react";

export function HeroBackground() {
  const texts = ["experiencia", "calidad", "novedad", "atencion"];
  const [text, setText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cuando cambia el índice, actualizar el texto y hacerlo visible
    setText(texts[index]);

    // Hacer invisible después de un tiempo (por ejemplo, 1 segundo)
    const show = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const hide = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [index]);

  return (
    <div class="absolute z-10 h-full w-full text-center text-neutral-300 text-[4.5rem] lg:text-[13rem]">
      <span className="relative text font-bold">
        <span
          className={`absolute z-[-1] ${isVisible ? "text-bottom opacity-0" : "invisible"}`}
        >
          {text}
        </span>
        <span
          className={` transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 scale-0"}`}
        >
          {text}
        </span>
      </span>
    </div>
  );
}
