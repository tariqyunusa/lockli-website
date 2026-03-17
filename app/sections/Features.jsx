"use client"
import styles from "../styles/Features.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)
export default function Features() {
  const Feature = [
    {
      Title: "Site Limit",
      Deccription:
        "Set timers on websites that consume your time. This feature allows users the flexibility to still access distracting sites—but only for a controlled period. For example, if you set a 30-minute limit on YouTube, you’ll only be able to use it for 30 minutes per day within your selected timeframe. Once that limit is reached, access is restricted.",
      color: "#7364DE",
    },
    {
      Title: "Domain Blocking",
      Deccription:
        "Completely block access to specific websites that distract you. This feature removes temptation entirely by preventing those sites from loading at all. Once a domain is blocked, it stays inaccessible for as long as the restriction is active—helping you stay focused without relying on willpower.",
      color: "#219EBC",
    },
    {
      Title: "Category Blocking",
      Deccription:
        "Block entire categories of distracting websites at once. Instead of adding sites one by one, you can restrict groups like social media, entertainment, or news in a single action. This makes it easier to stay focused without worrying about discovering new distractions within the same category.",
      color: "#8ECAE6",
    },
    {
      Title: "Pomodoro Timer",
      Deccription:
        "Use structured time intervals to improve focus and maintain productivity. The Pomodoro Timer breaks your work into focused sessions followed by short breaks. This helps reduce burnout, maintain concentration, and build a consistent workflow throughout the day.",
      color: "#81B29A",
    },
    {
      Title: "Analytics",
      Deccription:
        "Understand how you spend your time online. Analytics provides a clear breakdown of your browsing habits, showing which sites take up most of your attention. With this insight, you can identify patterns, adjust your limits, and make more intentional decisions about how you use your time.",
      color: "#FB8500",
    },
  ];
  const cardRef = useRef([])

  const cardsLength = Feature.length
  const segmentSize = 1 / cardsLength

  const cardYOffset = 5
  const cardScaleStep = 0.075
  
  useEffect(() => {
    cardRef.current.forEach((card, i) => {
        gsap.set(card, {
            xPercent: -50,
            yPercent: -50 + i * cardYOffset,
            scale: 1 - i * cardScaleStep
        })
    })
  },[])


  return (
    <section className={styles.feature__section}>
      {Feature.map((card, idx) => (
        <div
          style={{ backgroundColor: card.color }}
          key={idx}
          ref={(el) => (cardRef.current[idx] = el)}
          className={`${styles.card} ${styles[`card__${idx}`] || ""}`}
       
        >
          <div className={styles.card__details}>
            <h2 className={styles.card__header}>{card.Title}</h2>
            <p className={styles.card__description}>{card.Deccription}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
