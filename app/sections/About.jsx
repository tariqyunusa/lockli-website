"use client";
import styles from "../styles/About.module.css";

export default function About({ refs, iconRefs }) {
  const icons = {
    work: 0,
    analytics: 1,
    websites: 2,
  };
  const iconColors = ["#6da7c7", "#219EBC", "#81B29A"];

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => {
      const cleanWord = word.replace(",", "").replace(".", "");

      return (
        <span key={word + "_" + i} className={styles.word}>
          {splitLetters(word)}

          {icons[cleanWord] !== undefined && (
            <span
              ref={(el) => (iconRefs.current[icons[cleanWord]] = el)}
              className={styles.inline_icon}
              style={{ backgroundColor: iconColors[icons[cleanWord]] }}
            >
              {icons[cleanWord] === 0 && "🔗"}
              {icons[cleanWord] === 1 && "📈"}
              {icons[cleanWord] === 2 && "🔒"}
            </span>
          )}
        </span>
      );
    });
  };

  const splitLetters = (word) => {
    return word.split("").map((letter, i) => (
      <span
        key={letter + "_" + i}
        ref={(el) => el && refs.current.push(el)}
        className={styles.char}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section className={`${styles.about__section}`}>
      <div className={styles.about__section_content}>
        {splitWords(
          "Lockli is an attention management system that helps users structure focused work, understand their online behavior through analytics, and enforce boundaries by limiting access to distracting websites.",
        )}
      </div>
    </section>
  );
}
