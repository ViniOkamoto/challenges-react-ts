import { TodoInput } from "./todo-input/TodoInput";
import { TodoList } from "./todo-list/TodoList";
import styles from "./TodoBody.module.css";

export function TodoBody() {
    return(
        <div className={styles.wrapper}>
            <TodoInput/>
            <TodoList/>
        </div>
    );
}