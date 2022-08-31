import { useState } from "react";
import { TodoInput } from "./todo-input/TodoInput";
import styles from "./TodoBody.module.css";
import { TaskInterface } from "../../interfaces/TaskInterface";
import { TodoItem } from "./todo-item/TodoItem";
import { Counter } from "../counter/Counter";
import { EmptyList } from "../empty-list/EmptyList";
import { v4 as uuidv4 } from 'uuid';


export function TodoBody() {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    function handleInputSubmit(task:string){

        const idRandom = 
        setTasks([...tasks,{
            id:uuidv4(),
            description: task,
            isDone: false,
        }])
    }
    const hasTasks = tasks.length > 0;
    
    const renderedTaks = tasks.map((e)=> {
        return <TodoItem 
        key={e.id} 
        task={e} 
        onDeleteTask={onDeleteTask} 
        onCheckTask={onCheckTask}
        />;
    })
    const tasksQuantity:number = tasks.length
    const concludedTasksQuantity:number = tasks.filter((task) => task.isDone == true).length;

    function onDeleteTask(taskToDelete:TaskInterface){
        const newTasksList:TaskInterface[] = tasks.filter(task =>{
            return task != taskToDelete;
        });

        setTasks(newTasksList);
    }
    function onCheckTask(id:string){
        const newTaskList = tasks.map(task => task.id === id ? {
            ...task,
            isDone: !task.isDone
          } : task); 
          setTasks(newTaskList);
    }
    
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