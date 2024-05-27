import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem todoDate={item.date} todoName={item.name}></ToDoItem>
      ))}
    </div>
  );
};
export default ToDoItems;
