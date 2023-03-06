import { HTMLAttributes } from "react"
import styles from "./TextInput.module.css"

interface TextProps extends HTMLAttributes<HTMLInputElement> {
    name: string;
    required?: boolean;
    value?: string;
}

export function TextInput({ name, value, required, ...rest }: TextProps) {
    return (
        <div className={styles.inputContainer}>
            <input name={name} type="text" placeholder="Adicione uma nova tarefa" className={styles.input} value={value} required={required} {...rest} />
        </div>
    )
}