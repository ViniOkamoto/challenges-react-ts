import { TodoInput } from "../input/TodoInput";
import styles from "./TodoBody.module.css";
export function TodoBody() {
    return(
        <div className={styles.wrapper}>
            <TodoInput/>
        </div>
    );
}