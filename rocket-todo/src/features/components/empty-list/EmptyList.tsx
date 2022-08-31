import styles from "./EmptyList.module.css"
import clipboard from "../../../assets/clipboard.png"

export function EmptyList() {
    return(
        <div className={styles.emptyList}>
        <hr />
        <div className={styles.emptyContent}>
            <img src={clipboard} alt="clipboard" />
            <strong>You don't have any task</strong>
            <span>Create tasks and organize your items to do</span>
        </div>
    </div>
    );
}