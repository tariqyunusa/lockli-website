"use client";
import { useEffect, useState, useRef } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import styles from "./styles/About.module.css"

export default function Home() {
 const letterRefs = useRef([]);
  const iconRefs = useRef([]);

  return (
    <>
      <Hero/>
      <About refs={letterRefs} iconRefs={iconRefs} className={styles.aboutStatic} />
    </>
  );
}