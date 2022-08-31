import { useState } from "react";
import { TodoInput } from "./todo-input/TodoInput";
import styles from "./TodoBody.module.css";
import { TaskInterface } from "../../interfaces/TaskInterface";
import { TodoItem } from "./todo-item/TodoItem";
import { Counter } from "../counter/Counter";
import { EmptyList } from "../empty-list/EmptyList";


export function TodoBody() {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    function handleInputSubmit(task:string){
        console.log(task);
        setTasks([...tasks,{
            description: task,
            done: false,
        }])
    }
    const hasTasks = tasks.length > 0;
    
    const renderedTaks = tasks.map((e)=> {
        return <TodoItem key={e.description}/>;
    })
    const tasksQuantity:number = tasks.length
    const concludedTasksQuantity:number = tasks.filter((task) => task.done == true).length;
    return(
        <div className={styles.wrapper}>
            <TodoInput handleSubmit={handleInputSubmit}/>
            <div className={styles.todoList}>
            <header>
                <Counter
                    quantity={tasksQuantity}
                    type={"list"} />
                <Counter
                    quantity={concludedTasksQuantity}
                    type={"concluded"} />

            </header>
            {hasTasks ? renderedTaks : <EmptyList/>}
           
        </div>
        </div>
    );
}