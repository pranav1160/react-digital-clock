import React,{useState} from "react";

function ToDoList (){
const [tasks,setTasks] = useState(
  [])
const [newTask,setNewTask]=  useState()

function handleInputChange(event){
  setNewTask(event.target.value)
}

function AddTask(){

if(newTask.trim() !==""){
setTasks(t=>[...t,newTask]);
setNewTask("")
  }
}
function deleteTask(index){
const upDatedTask = tasks.filter((_,i)=>i!==index)
setTasks(upDatedTask)
}

function moveTaskUp(index){
  if(index>0){
    const upDatedTasks =[...tasks];
    [upDatedTasks[index],upDatedTasks[index-1]]=[upDatedTasks[index-1],upDatedTasks[index]]

    setTasks(upDatedTasks)
  }


}

function moveTaskDown(index){
  if(index<tasks.length-1){
    const upDatedTasks =[...tasks];
    [upDatedTasks[index],upDatedTasks[index+1]]=[upDatedTasks[index+1],upDatedTasks[index]]

    setTasks(upDatedTasks)}
}

  
  return(
<div className="to-do-list">
 

  <h1>To-Do-List</h1> 
 
  <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter your task..."/>

<button className="add-button" onClick={AddTask}>Add</button>

<ol>
  {tasks.map((element,index)=><li key={index}>
   <span className="text"> {element} </span> 
   
   <button 
          className="delete-button"
      onClick={()=>deleteTask(index)
              }>Delete</button>

  <button
  className="move-button"
  onClick={()=>moveTaskUp(index)}
  >👆</button>
  
  <button
  className="move-button"
  onClick={()=>moveTaskDown(index)}
  >👇</button>

  </li>)}
</ol>


</div>
)
}

export default ToDoList;