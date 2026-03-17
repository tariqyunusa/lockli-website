"use client";
import { useEffect, useState, useRef } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const letterRefs = useRef([]);
  const iconRefs = useRef([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <Hero isMobile={isMobile} />
      {isMobile && (
        <About refs={letterRefs} iconRefs={iconRefs} />
      )}
      <Features />
    </>
  );
}