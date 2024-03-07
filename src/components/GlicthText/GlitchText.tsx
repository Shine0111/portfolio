import { useEffect, useState } from "react";

interface Props {
  texts: string[];
}
const GlitchText = ({ texts }: Props) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [glitchedText, setGlitchedText] = useState<string>(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentTextIndex + 1) % texts.length;
      setCurrentTextIndex(nextIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  useEffect(() => {
    const originalText = texts[currentTextIndex];
    let intervalId: number;

    const glitchEffect = () => {
      let newGlitchedText = "";
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          newGlitchedText += String.fromCharCode(
            Math.floor(Math.random() * 94) + 33
          );
        } else {
          newGlitchedText += originalText[i];
        }
      }
      setGlitchedText(newGlitchedText);
    };

    const textChange = () => {
      glitchEffect();
      intervalId = setInterval(glitchEffect, 50);
      setTimeout(() => {
        clearInterval(intervalId);
        setGlitchedText(originalText);
      }, 300);
    };

    setTimeout(textChange, 2000);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  return <> {glitchedText}</>;
};

export default GlitchText;
