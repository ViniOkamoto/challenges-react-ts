import { Trash } from "phosphor-react";
import styles from "./TodoItem.module.css"


export function TodoItem() {
    return (
        <div className={styles.todoBox}>
   
        <ul>
          <label className={styles.container}>
              <input
                type="checkbox"
                readOnly
                // checked={task.isComplete}
                // onClick={handleCheckCompletedTask}
              />
              <span className={styles.checkmark}></span>
          </label>
  
              <li> 
  
              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
  
              </li>
              
              <button type="button" data-testid="remove-task-button" onClick={() => {}}>
                <Trash size={20}/>
              </button>
    
        </ul>
     
      </div>
    );
}