import { Counter } from "../counter/Counter"
import styles from "./TodoList.module.css"
import { EmptyList } from "../empty-list/EmptyList";

export function TodoList() {
    return (
        <div className={styles.wrapper}>
            <header>
                <Counter
                    quantity={0}
                    type={"list"} />
                <Counter
                    quantity={0}
                    type={"concluded"} />

            </header>
           <EmptyList/>
        </div>
    );
}