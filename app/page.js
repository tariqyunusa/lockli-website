"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles/page.module.css";
import Button from "./components/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const icons = ["🔒", "🚪", "🔗"];

  const sequence = [
    [false, false],
    [true, false],
    [true, true],
    [true, false],
    [false, false]
  ];

  const [visible, setVisible] = useState([false, false]);
  const [exiting, setExiting] = useState([false, false]);
  const [step, setStep] = useState(0);
  const sectionRef = useRef(null)
  const doorRef = useRef(null)
  const doorIconRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = sequence[step];

      const newExiting = [false, false];
      next.forEach((v, i) => {
        if (!v && visible[i]) {
          newExiting[i] = true;
        }
      });

      setExiting(newExiting);

      setTimeout(() => {
        setVisible(next);
        setExiting([false, false]);
      }, 300);

      setStep((s) => (s + 1) % sequence.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [step, visible]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true
      }
    });

    // emoji fades first
    tl.to(doorIconRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.2
    });

    // then circle scales
    tl.to(doorRef.current, {
      scale: 30,
      ease: "power2.inOut"
    });

  }, []);

  return (
    <section className={styles.home_section} ref={sectionRef}>
      <main className={styles.home__main}>
        <div className={styles.home__header_container}>
          <h1 className={styles.home__header}>
            The Internet,
            <span className={styles.home__header_icons}>


              {(visible[0] || exiting[0]) && (
                <div
                  className={`${styles.home__header_span_image} ${styles.home__header_span_image_second} ${styles.icon} ${exiting[0] ? styles.leftExit : styles.leftEnter
                    }`}
                >
                  {icons[0]}
                </div>
              )}


              <div
                ref={doorRef}
                className={`${styles.home__header_span_image} ${styles.center}`}
              >
                <span ref={doorIconRef} className={styles.door_icon}>
                  {icons[1]}
                </span>
              </div>

              {(visible[1] || exiting[1]) && (
                <div
                  className={`${styles.home__header_span_image} ${styles.home__header_span_image_third} ${styles.icon} ${exiting[1] ? styles.rightExit : styles.rightEnter
                    }`}
                >
                  {icons[2]}
                </div>
              )}
            </span>
            Without the Distractions.
          </h1>
        </div>

        <p className={styles.home__paragraph}>Get more done with Lockli.</p>
        <Button />
      </main>
    </section>
  );
}