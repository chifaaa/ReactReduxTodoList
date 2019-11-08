import React, { Component } from 'react';
import Todos from './todos'
import AddTodoContainer from './addTodo'
import './App.css'

class TodoAppHome extends Component {
   
  //   deleteTodo = (id) => {
  //     const todos = this.state.todos.filter(todo => {
  //       return todo.id !== id
  //     });
  //     this.setState({
  //       todos
  //     });
  //   }
  
  
      
  //   addTodo = (todo) =>{
  // todo.id=Math.random();
  // todo.checked=false;
  // let todos=[...this.state.todos, todo];
  // this.setState({
  //   todos
  // })
  //   }
  //   toggleDonee=(index)=> {

  
  //     var tab=this.state.todos
  
  //     tab[index].checked= !tab[index].checked
  
  //     console.log('tab is',tab[index].checked)
  
  //     this.setState({todos:tab})

  //   }
  
  
    render() {
      return (
        <div className="todo-app container">
          <Todos />
          <AddTodoContainer />
        </div>
      );
    }
  }

export default TodoAppHome;