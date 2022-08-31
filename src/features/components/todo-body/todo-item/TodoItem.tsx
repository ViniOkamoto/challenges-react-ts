import { Trash } from "phosphor-react";
import { TaskInterface } from "../../../interfaces/TaskInterface";
import styles from "./TodoItem.module.css"

interface TodoItemProps{
  task: TaskInterface;
  onDeleteTask: (task:TaskInterface) => void;
  onCheckTask: (task:TaskInterface) => void;
}
export function TodoItem({task,onDeleteTask, onCheckTask}:TodoItemProps) {
  function handleDeleteButton(){
    onDeleteTask(task);
  }  
  
  return (
        <div className={styles.todoBox}>
   
        <ul>
          <li>
          <label className={styles.container}>
              <input
                type="checkbox"
                readOnly
                // checked={task.isComplete}
                // onClick={handleCheckCompletedTask}
              />
              <span className={styles.checkmark}></span>
          </label>
          </li>
              <li className={styles.description}> 
  
              <p>{task.description}</p>
  
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