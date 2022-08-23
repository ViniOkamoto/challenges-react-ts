import { AddCircleOutline } from "@mui/icons-material"
import { FormEvent } from "react";
import styles from "./TodoInput.module.css"

export function TodoInput(){

    function handleButtonSubmit(event:FormEvent) {
        event.preventDefault();
    }
    return(
        <form>
            <input type="text" placeholder="Add a new task" />
            <button type='submit' className={styles.todoButton} onClick={handleButtonSubmit}>
                Create
                <AddCircleOutline fontSize="small"/>
                </button>
        </form>
    );
}