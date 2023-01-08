import React from 'react'
import {TodosItem} from "./TodosItem";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'> TODO List </h3>
    { props.todos.map((todo)=>{
      return <TodosItem todo={todo} key={todo.sno} onClick={props.onDelete}/>
    })
    }



      {/* <TodosItem todo={props.todos[0]}/> 
      <p>
      <TodosItem todo=  {props.todos[0]}/>
      </p>
      <button className='btn btn-sm btn-danger'>Delete</button> */}
    
    
    </div>
  )
}

export default Todos
