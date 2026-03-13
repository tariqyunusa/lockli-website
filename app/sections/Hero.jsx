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



  return (
    <section className={styles.home_section} ref={sectionRef}>
      <main className={styles.home__main}>
        <div className={styles.home__header_container}>
          <h1 className={styles.home__header}>
            The Internet,
            <span className={styles.home__header_icons}>
              <div ref={doorRef} className={styles.home__header_span_image}>
                <span ref={doorIconRef} className={styles.door_icon}>
                  {doorIcon}
                </span>

                <div
                  ref={contentRef}
                  className={styles.next_section_content}
                >
                </div>
              </div>
            </span>
            Without the
          </h1>
        </div>

        <p className={styles.home__paragraph}>
          Get more done with Lockli.
        </p>

        <Button />
      </main>
    </section>
  );
}