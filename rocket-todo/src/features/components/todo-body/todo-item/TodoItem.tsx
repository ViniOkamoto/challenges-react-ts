import { List, Trash } from "phosphor-react";
import { DragEvent, LiHTMLAttributes, useRef } from "react";
import { TaskInterface } from "../../../interfaces/TaskInterface";
import styles from "./TodoItem.module.css"

interface TodoItemProps extends LiHTMLAttributes<HTMLLIElement> {
  task: TaskInterface;
  index: number;
  onDeleteTask: (task: TaskInterface) => void;
  onCheckTask: (id: string) => void;
}


export function TodoItem({
  task,
  onDeleteTask,
  onCheckTask,
 ...props
}: TodoItemProps) {

  function handleDeleteButton() {
    onDeleteTask(task);
  }

  function handleCheckTask() {
    onCheckTask(task.id);
  }

  return (
    <li
      className={styles.todoBox}
      draggable
      {...props}
    >
      <List size={24}/>
      <label className={styles.container}>
        <input
          type="checkbox"
          readOnly
          checked={task.isDone}
          onClick={handleCheckTask}
        />
        <span className={styles.checkmark}></span>
      </label>
      <div className={styles.descriptionBox}>
        <p className={task.isDone ? styles.descriptionTaskDone : styles.description}>{task.description}</p>
      </div>
      <button
        type="button"
        title="Delete Button"
        onClick={handleDeleteButton}>
        <Trash size={20} />
      </button>
    </li>
  );
}