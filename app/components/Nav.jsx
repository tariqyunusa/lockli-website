import Image from "next/image";
import styles from "../styles/Nav.module.css"
import Button from "./Button";

export default function Nav() {
    return(
        <nav className={styles.nav}>
            <div className={styles.nav__logo}> 
                <div className={styles.nav__logo__container}>
                    <Image src='/lockli-logo.png' alt="lockl's logo" fill />
                </div>
                <h2 className={styles.nav__logo_header}>Lockli</h2>
            </div>
            <Button />
        </nav>
    )
}