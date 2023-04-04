import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TextInput } from "./components/TextInput";
import "./global.css";

export interface ITask {
  id: string;
  content: string;
  checked?: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event: any) {
    event?.preventDefault();
    const content = event?.target.task.value;
    const newTask = {
      id: String(new Date().getTime()),
      content
    };
    setTasks([...tasks, newTask]);
    setInputValue("")
  }

  function handleRemove(task: ITask) {
    const newTask = tasks.filter((t) => t.id != task.id);
    console.log("newTask", newTask);
    setTasks(newTask);
  }

  return (
    <div>
      <Header />
      <div className={styles.todoContainer}>
        <form onSubmit={handleSubmit} className={styles.newTask}>
          <TextInput name="task" onChange={(e) => setInputValue(e.currentTarget.value)} value={inputValue} required />
          <Button>
            <PlusCircle size={24} weight="bold" />
          </Button>
        </form>
        <div className={styles.task}>
          <Task
            tasks={tasks}
            onTasks={setTasks}
            onRemove={handleRemove}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
