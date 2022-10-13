import { useState } from "react";
 import "./App.css";

//import User from "./User";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
   

   const handleInput = (event)=>{
     setNewTask(event.target.value);
    };

    const addTask = () => {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
      }; // in this if there is no list then first task get id 1 otherwise get another id (i.e previous Id+1)
      setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    };

  
     const handleDelete = (id) =>{
      setTodoList(todoList.filter((task) => task.id !== id));
              
     };
  return (
         
     <>
       <div className="App"> 
       
      <div className="addTask">
        <input type="text" onChange={handleInput}/>
       
        <button className="taskButton" onClick={addTask}> ADD</button>
      </div>
      <div className="list">
        <h4>List of task</h4>
        {todoList.map((task)=>{
                return (
                    <>
                    <div>
                    {task.id} {task.taskName}
                    <button className="taskButton" onClick={()=> handleDelete(task.id)}>Delete</button>

                    </div>
              
                    </>

                ) 
        })}
        
      </div>
       </div>

       </>
  );
}




export default App;
