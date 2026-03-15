"use client";
import styles from "../styles/About.module.css";

export default function About({ refs }) {

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => (
      <span key={word + "_" + i} className={styles.word}>
        {splitLetters(word)}
      </span>
    ));
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
    <section className={styles.about__section}>
      <div className={styles.about__section_content}>
        {splitWords(
          "Lockli is an attention management system that helps users structure focused work, understand their online behavior through analytics, and enforce boundaries by limiting access to distracting websites."
        )}
      </div>
    </section>
  );
}