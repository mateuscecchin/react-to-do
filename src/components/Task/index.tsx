import { ClipboardText, Trash } from "phosphor-react";
import { ITask } from "../../App";
import styles from "./Task.module.css";

interface ContentProps {
    tasks: ITask[];
    onTasks: (tasks: ITask[]) => void
    onRemove: (task: ITask) => void;
}

interface CardProps {
    content: string;
    checked?: boolean;
    onChecked: () => void;
    onRemove: () => void;
}

interface TaskProps extends ContentProps {
    onTasks: (tasks: ITask[]) => void
}

function Info({ tasks }: { tasks: ITask[] }) {
    const tasksCount = tasks.length
    const confirmTask = tasks.filter(t => t.checked == true)
    console.log(confirmTask)

    return (
        <div className={styles.info}>
            <div className={styles.counterTaskSeparator}>
                <h3 className={styles.tarefasCriadas}>Tarefas criadas</h3>
                <div className={styles.counterTask}>
                    <h3>{tasksCount}</h3>
                </div>
            </div>
            <div className={styles.counterTaskSeparator}>
                <h3 className={styles.tarefasConcluidas}>Concluidas</h3>
                <div className={styles.counterTask}>
                    <h3>{confirmTask.length} de {tasksCount}</h3>
                </div>
            </div>
        </div>
    );
}

function Content({
    tasks,
    onTasks,
    onRemove,
}: ContentProps) {
    const isEmpty = tasks.length < 1;

    function handleTasks(task: ITask) {

        const checkedTask = tasks.map((t, i) => t == task ? { ...task, checked: true } : tasks[i])
        onTasks([...checkedTask])
    }

    return (
        <div className={styles.content}>
            {isEmpty && (
                <div className={styles.contentEmpty}>
                    <ClipboardText className={styles.clipboard} size={75} />
                    <div>
                        <h3>Você ainda não tem tarefas cadastradas</h3>
                        <h3>Crie tarefas e organize seus itens a fazer</h3>
                    </div>
                </div>
            )}
            {tasks.map &&
                tasks.map((t, i) => (
                    <Card
                        key={i}
                        content={t.content}
                        checked={t.checked}
                        onChecked={() => handleTasks(t)}
                        onRemove={() => onRemove(t)}
                    />
                ))}
        </div>
    );
}

function Card({
    content,
    checked,
    onRemove,
    onChecked
}: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.infoCard}>
                <input type="radio" className={styles.radioInput} onChange={() => onChecked()} checked={checked} />
                <p>{content}</p>
            </div>
            <Trash
                className={styles.trashIcon}
                size={24}
                onClick={() => onRemove()}
            />
        </div>
    );
}

export function TaskComponent({ tasks, onRemove, onTasks }: TaskProps) {
    return (
        <>
            <Info tasks={tasks} />
            <Content tasks={tasks} onRemove={onRemove} onTasks={onTasks} />
        </>
    )
}

export const Task = Object.assign(TaskComponent, {
    Info,
    Content,
    Card,
});
