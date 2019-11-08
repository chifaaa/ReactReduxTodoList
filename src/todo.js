import React,{ Component } from 'react'
 

import {connect} from 'react-redux'


  class TodosContainer extends {Component}{
    render(){
      return(
  
  
    <div className="todos collection">
      {this.props.todos.length ? (
    this.props.todos.map((el,index) => {
      return (

          <li className="todo-item" key={index}>
            <label  htmlFor={index} className={el.checked?"tick js-tick checked":"tick js-tick unchecked"} onClick={() => {this.props.toggleDone(el.id)}}></label>
            <span className={el.checked?"checkedspan":"none"}>{el.inputvalue}</span>
            <button className="delete-todo js-delete-todo" onClick={() => {this.props.deleteTodo(el.id)}}>
              <svg><use href="#delete-icon"></use></svg>
            </button>
          </li>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  )}

    </div>
  
      )  }
    
    }

  const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps=(Dispatch)=>{
   return{
     deleteTodo:(id)=>{ Dispatch({type:'DELETE_TODO',id:id}) } ,
     toggleDone:(id)=>{ Dispatch({type:'EDIT_TODO',id:id}) }

  }

   }


 
  export default  connect(mapStateToProps,mapDispatchToProps)(TodosContainer);