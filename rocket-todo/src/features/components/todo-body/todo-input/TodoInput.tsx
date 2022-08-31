import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./TodoInput.module.css"
interface TodoInputProps {
    handleSubmit: (task: string) => void;
}
export function TodoInput({ handleSubmit }: TodoInputProps) {

    const [newTask, setNewTask] = useState('');

    function handleTaskFieldChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }
    function handleTaskFieldInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('This field cannot be empty');
    }

    const isTaskEmpty = newTask.length === 0;

    function handleButtonSubmit(event: FormEvent) {
        event.preventDefault();
        setNewTask('');
        handleSubmit(newTask);
    }
    return (
        <form>
            <input 
            type="text" 
            placeholder="Add a new task"
            value={newTask}
            onChange={handleTaskFieldChange}
            onInvalid={handleTaskFieldInvalid}
            required
            />
            <button 
            type='submit' 
            className={styles.todoButton} 
            onClick={handleButtonSubmit}
            disabled={isTaskEmpty}
            >
                Create
                <PlusCircle size={16} />
            </button>
        </form>
    );
}