"use client";
import styles from "../styles/page.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../components/Button";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const doorIcon = "🚪";

  const sectionRef = useRef(null);
  const doorRef = useRef(null);
  const doorIconRef = useRef(null);
  const contentRef = useRef(null);
  const mainContentRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const mainContentHeadRef = useRef(null);
  const letterRefs = useRef([]);
  const iconRefs = useRef([]);
  iconRefs.current = [];
  const letters = letterRefs.current;
  const iconLetterIndex = [62, 112, 168];

  useEffect(() => {
    const letters = letterRefs.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
    });

    gsap.set(iconRefs.current, {
      opacity: 0,
      width: 0,
      scale: 0.2
    });
    tl.to(doorIconRef.current, {
      opacity: 0,
      ease: "none",
      duration: 0.3,
    });

    tl.to(
      [
        mainContentRef.current,
        paragraphRef.current,
        mainContentHeadRef.current,
        buttonRef.current,
      ],
      {
        opacity: 0,
        ease: "none",
        duration: 0.3,
      },
    );

    tl.to(doorRef.current, {
      width: "110vw",
      height: "110vh",
      borderRadius: 0,
      ease: "none",
      duration: 1,
    });

    tl.to(contentRef.current, {
      opacity: 1,
      ease: "none",
      duration: 0.2,
    });

    tl.to(
      {},
      {
        duration: 2,
        ease: "none",
        onUpdate: function () {
          const progress = this.progress();
          const totalLetters = letters.length;

          
          letters.forEach((el, i) => {
            const threshold = i / totalLetters;

            const opacity = gsap.utils.clamp(
              0.2,
              1,
              (progress - threshold) * totalLetters,
            );

            gsap.set(el, { opacity });
          });

          
          iconRefs.current.forEach((icon, i) => {
            const trigger = (iconLetterIndex[i] + 5) / totalLetters;

            if (progress > trigger) {
              gsap.to(icon, {
                width: 75,
                opacity: 1,
                duration: 0.35,
                ease: "cubic-bezier(.34,1.56,.64,1)",
                scale: 1,
                overwrite: true,
              });
            } else {
              gsap.to(icon, {
                width: 0,
                opacity: 0,
                duration: 0.25,
                ease: "cubic-bezier(.4,0,.2,1)",
                overwrite: true,
              });
            }
          });
        },
      },
    );
  }, []);

  return (
    <section className={styles.home_section} ref={sectionRef}>
      <main className={styles.home__main}>
        <div className={styles.home__header_container}>
          <h1 className={styles.home__header}>
            <span ref={mainContentHeadRef}>The Internet,</span>
            <span className={styles.home__header_icons}>
              <div ref={doorRef} className={styles.home__header_span_image}>
                <span ref={doorIconRef} className={styles.door_icon}>
                  {doorIcon}
                </span>

                <div className={styles.next_section_content}>
                  <div
                    className={styles.next_section_content_inner}
                    ref={contentRef}
                  >
                    <About refs={letterRefs} iconRefs={iconRefs} />
                  </div>
                </div>
              </div>
            </span>
            <span ref={mainContentRef}>Without the Distractions</span>
          </h1>
        </div>

        <p className={styles.home__paragraph} ref={paragraphRef}>
          Get more done with Lockli.
        </p>

        <div ref={buttonRef}>
          <Button />
        </div>
      </main>
    </section>
  );
}
