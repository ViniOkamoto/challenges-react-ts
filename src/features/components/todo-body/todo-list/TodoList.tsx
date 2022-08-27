import { useEffect, useState } from "react";
import { Counter } from "../../counter/Counter";
import { EmptyList } from "../../empty-list/EmptyList";
import { TodoItem } from "../todo-item/TodoItem";
import styles from "./TodoList.module.css"

interface Task {
    description: string;
    done: boolean;
}

const mockTasks:Task[] =[
    {
        description:"teste",
        done: false,
    },
    {
        description:"teste2",
        done: true,
    },
    {
        description:"teste3",
        done: false,
    }
]
export function TodoList() {
    const [tasks, setTasks] = useState(mockTasks);
    const hasTasks = tasks.length;

    const tasksQuantity:number = tasks.length
    const concludedTasksQuantity:number = tasks.filter((task) => task.done == true).length;
    return (
        <div className={styles.wrapper}>
            <header>
                <Counter
                    quantity={tasksQuantity}
                    type={"list"} />
                <Counter
                    quantity={concludedTasksQuantity}
                    type={"concluded"} />

            </header>
            {hasTasks ? <TodoItem/>: <EmptyList/>}
           
        </div>
    );
}