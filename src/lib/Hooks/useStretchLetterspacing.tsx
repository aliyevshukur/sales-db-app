import { useEffect, useRef, useState } from "react";

function useStretchLetterSpacing(text: string) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [letterSpacing, setLetterSpacing] = useState(0);

    useEffect(() => {
        function updateSpacing() {
            if (!containerRef.current || !textRef.current || !text) return;

            const containerWidth = containerRef?.current?.offsetWidth;
            textRef.current.style.letterSpacing = "0px";
            const textWidth = textRef?.current?.scrollWidth;
            const lettersCount = text.length;
            console.log(`Container width: ${containerWidth}, Text width: ${textWidth}`)

            if (lettersCount <= 1) {
                setLetterSpacing(0);
                return;
            }

            const extraSpace = containerWidth - textWidth;
            const spacing = extraSpace / (lettersCount - 1);

            setLetterSpacing(spacing > 0 ? spacing : 0);
        }

        updateSpacing();

        window.addEventListener("resize", updateSpacing);
        return () => window.removeEventListener("resize", updateSpacing);
    }, [text]);

    return { letterSpacing, containerRef, textRef };
}

export default useStretchLetterSpacing;
