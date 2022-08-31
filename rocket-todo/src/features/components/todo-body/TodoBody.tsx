import { useRef, useState } from "react";
import { TodoInput } from "./todo-input/TodoInput";
import styles from "./TodoBody.module.css";
import { TaskInterface } from "../../interfaces/TaskInterface";
import { TodoItem } from "./todo-item/TodoItem";
import { Counter } from "../counter/Counter";
import { EmptyList } from "../empty-list/EmptyList";
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export function TodoBody() {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    function handleInputSubmit(task: string) {

        setTasks([...tasks, {
            id: uuidv4(),
            description: task,
            isDone: false,
        }])
    }
    const dragItem = useRef<any>(null)
	const dragOverItem = useRef<any>(null)

    const hasTasks = tasks.length > 0;

    const renderedTaks = tasks.map((task, index) => {
        return <TodoItem
            key={task.id}
            task={task}
            index = {index}
            onDeleteTask={onDeleteTask}
            onCheckTask={onCheckTask}
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleOnDragEnd}
            onDragOver={(e) => e.preventDefault()}
        />;
    })
    const tasksQuantity: number = tasks.length
    const concludedTasksQuantity: number = tasks.filter((task) => task.isDone == true).length;

    function onDeleteTask(taskToDelete: TaskInterface) {
        const newTasksList: TaskInterface[] = tasks.filter(task => {
            return task != taskToDelete;
        });
        toast.dismiss();
        toast('✅ Task deleted!');
        setTasks(newTasksList);
    }

    function onCheckTask(id: string) {
        const newTaskList = tasks.map(task => task.id === id ? {
            ...task,
            isDone: !task.isDone
        } : task);
        setTasks(newTaskList);
    }

    const [dragStartIndex, setdragStartIndex] = useState<number>(0);

    const onDragStart = (index:number) => setdragStartIndex(index)

    // update list when item dropped
    function handleOnDragEnd() {
        		//duplicate items
		let _tasks = [...tasks]

		//remove and save the dragged item content
		const draggedItemContent = _tasks.splice(dragItem.current, 1)[0]

		//switch the position
		_tasks.splice(dragOverItem.current, 0, draggedItemContent)

		//reset the position ref
		dragItem.current = null
		dragOverItem.current = null

		//update the actual array
		setTasks(_tasks)
    }


    return (
        <div className={styles.wrapper}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                toastStyle={{ 
                    backgroundColor: "var(--gray-500)",
                    color: "var(--gray-100)",
                    fontSize: "1rem",
            }}
            />
            <TodoInput handleSubmit={handleInputSubmit} />
            <div className={styles.todoList}>
                <header>
                    <Counter
                        quantity={tasksQuantity}
                        type={"list"} />
                    <Counter
                        quantity={concludedTasksQuantity}
                        type={"concluded"} />

                </header>
            
                {hasTasks ? 
                <ul>{renderedTaks} </ul> : 
                <EmptyList />}

            </div>
        </div>
    );
}