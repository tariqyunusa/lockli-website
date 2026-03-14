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
  const mainContentRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const mainContentHeadRef = useRef(null)


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true
      }
    })
    .to(doorIconRef.current, {
      opacity: 0,
      ease: "none",
      duration: 0.3
    })
     .to(
      [mainContentRef.current, paragraphRef.current, mainContentHeadRef.current, buttonRef.current], {
        opacity: 0,
        ease: "none",
        duration: 0.3
      }, 
    )
    tl.to(
      doorRef.current, {
        width: "100vw",
        height: "120vh",
        borderRadius: 0,
        ease: "none",
        duration: 1
      }
    )
   
  },[])



  return (
    <section className={styles.home_section} ref={sectionRef}>
      <main className={styles.home__main}>
        <div className={styles.home__header_container} >
          <h1 className={styles.home__header}>
            <span  ref={mainContentHeadRef}>The Internet,</span>
            <span className={styles.home__header_icons}>
              <div ref={doorRef} className={styles.home__header_span_image}>
                <span ref={doorIconRef} className={styles.door_icon}>
                  {doorIcon}
                </span>

                <div
                  ref={contentRef}
                  className={styles.next_section_content}
                >
                  <div className={styles.next_section_content_inner}>
                <About />

                  </div>
                </div>
              </div>
            </span>
            <span  ref={mainContentRef}>Without the Distractions</span>
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