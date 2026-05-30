import { useState, useEffect } from "react";

export function TypingEffect() {
  const words = [
    "AI & Data Science Engineer",
    "Python & SQL Developer",
    "Salesforce Workflows Architect",
    "Machine Learning & Data Analyst"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing letters
        setCurrentText((prev) => activeWord.substring(0, prev.length + 1));
        setTypingSpeed(100);

        if (currentText === activeWord) {
          // Pause when word completes
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Deleting letters
        setCurrentText((prev) => activeWord.substring(0, prev.length - 1));
        setTypingSpeed(45);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="inline-block min-h-[1.5em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 font-bold tracking-tight">
      {currentText}
      <span className="ml-1 inline-block w-0.5 h-6 bg-purple-500 animate-[pulse_0.8s_infinite] align-middle" />
    </span>
  );
}
