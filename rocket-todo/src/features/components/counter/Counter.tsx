import styles from "./Counter.module.css";


interface CounterProps {
    quantity: number;
    type: "list" | "concluded";
}

export function Counter({ quantity = 0, type = 'list' }: CounterProps) {

    const isListCounter: boolean = type === "list";

    return (
        <div className={styles.counter}>
            <strong className={
                isListCounter ? styles.listCounter : styles.concludedCounter}
            >
                {isListCounter ? "Created Tasks" : "Concluded"}
            </strong>
            <strong>{quantity}</strong>
        </div>
    );
}