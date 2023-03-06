import styles from "./Header.module.css"
import Logo from "../../assets/rocket.svg"

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.titleContainer}>
                <img src={Logo} width={56} height={56}></img>
                <h1 className={styles.title}>to</h1>
            </div>
        </div>
    )
}