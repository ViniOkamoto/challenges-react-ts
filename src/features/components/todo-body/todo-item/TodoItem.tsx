import { Trash } from "phosphor-react";
import { TaskInterface } from "../../../interfaces/TaskInterface";
import styles from "./TodoItem.module.css"

interface TodoItemProps{
  task: TaskInterface;
  onDeleteTask: (task:TaskInterface) => void;
  onCheckTask: (id:string) => void;
}
export function TodoItem({task,onDeleteTask, onCheckTask}:TodoItemProps) {
  function handleDeleteButton(){
    onDeleteTask(task);
  }  

  function handleCheckTask(){
    onCheckTask(task.id);
  }
  
  return (
        <div className={styles.todoBox}>
   
        <ul>
          <li>
          <label className={styles.container}>
              <input
                type="checkbox"
                readOnly
                checked={task.isDone}
                onClick={handleCheckTask}
              />
              <span className={styles.checkmark}></span>
          </label>
          </li>
              <li className={styles.descriptionBox}> 

              <p className={task.isDone ? styles.descriptionTaskDone :  styles.description}>{task.description}</p>
  
              </li>
              
              <button 
              type="button" 
              title="Delete Button"
              onClick={handleDeleteButton}>
                <Trash size={20}/>
              </button>
    
        </ul>
     
      </div>
    );
}