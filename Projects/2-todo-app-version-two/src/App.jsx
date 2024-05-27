import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";




function App() {

  const todoItems = [
    {
   name: "poli",
   date: "12/23/1223",
  },
  {
    name: "poli",
    date: "12/23/1223",
  },
  {
    name: "poli",
    date: "12/23/1223",
  }

 
];
const [] = useState(todoItems);
  return (
    <center className="todo-container">
    <AppName/>
    <AddToDo/>
    <ToDoItems todoItems={todoItems}></ToDoItems>


   
    
    </center>
  );
}

export default App;
