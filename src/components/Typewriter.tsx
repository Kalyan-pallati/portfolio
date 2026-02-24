"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  words: string[];      
  staticText?: string;  
  typingSpeed?: number; 
  deletingSpeed?: number; 
  pauseTime?: number;   
}

export const Typewriter = ({ 
  words, 
  staticText = "", 
  typingSpeed = 150, 
  deletingSpeed = 100,
  pauseTime = 2000 
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    const typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    const tick = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText((prev) => currentWord.substring(0, prev.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText((prev) => currentWord.substring(0, prev.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1); 
        }
      }
    }, isDeleting && displayText === currentWord ? pauseTime : typeSpeed); 

    return () => clearTimeout(tick);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="flex items-center md:text-[clamp(3rem,4vw,3.75rem)] text-white font-sans tracking-tight">

      <span className="mr-3">{staticText}</span>
      
      <span className="relative inline-block leading-[1.1] min-h-[1.1em]">
        <span className="inline-block mr-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {displayText || "\u00A0"}
        </span>

        <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="absolute -right-1 bottom-0 h-[1em] w-[4px] bg-blue-500 "
        />
        </span>
    </div>
  );
};

export default Typewriter;