"use client";

import { useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import Button from "./components/Button";

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

  return (
    <section className={styles.home_section}>
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

              
              <div className={`${styles.home__header_span_image} ${styles.center}`}>
                {icons[1]}
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