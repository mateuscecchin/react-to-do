import styles from "./Button.module.css"
import React from "react"

export function Button({ children }: { children: React.ReactNode }) {
    return (
        <button type="submit" className={styles.button}>
            {children}
        </button>
    )
}