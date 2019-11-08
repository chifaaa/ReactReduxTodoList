import React,{ Component } from 'react'
import {connect} from 'react-redux'


class AddTodoContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     content:''
// }}
//     handleChange = (e) =>{
//         this.setState({
//             content:e.target.value
//         })
//     }
//     handleSubmit = (e) =>{
//         e.preventDefault();
//         if (this.state.content!=='') { this.props.addTodo(this.state)
//         this.setState({
//             content:''
//         })
//       }
//     }
    render() { 
        return ( 
            <div>

    <main>
      <div className="container">
        <h1 className="app-title">todos</h1>
        <form  onSubmit={(e)=>{this.props.add(this.props.input, e.preventDefault())}} className="js-form">
            <input type="text" aria-label="Enter a new todo item" placeholder="Add a todo" className="js-todo-input" onChange={(e)=>{this.props.handleChange(e.target)}}  value={this.props.input}/>
          </form> 
        <ul className="todo-list js-todo-list"></ul>
      </div>
    </main>
    <svg>
      <defs>        
        <symbol id="delete-icon" viewBox="0 0 448 448"><path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.132812-123.65625-100.34375-223.867188-224-224zm124.449219 325.824219c4.15625 4.015625 5.828125 9.964843 4.363281 15.558593s-5.835938 9.964844-11.429688 11.429688-11.542968-.207031-15.558593-4.363281l-101.824219-101.824219-101.824219 101.824219c-6.277343 6.0625-16.257812 5.976562-22.429687-.195313s-6.257813-16.152344-.195313-22.429687l101.824219-101.824219-101.824219-101.824219c-4.15625-4.015625-5.828125-9.964843-4.363281-15.558593s5.835938-9.964844 11.429688-11.429688 11.542968.207031 15.558593 4.363281l101.824219 101.824219 101.824219-101.824219c6.277343-6.0625 16.257812-5.976562 22.429687.195313s6.257813 16.152344.195313 22.429687l-101.824219 101.824219zm0 0" fill="rgba(55, 55, 55, 0.2)"/></symbol>
      </defs>
    </svg>
  </div>

         );
    }
}
 
const mapStateToProps = state => {
  return {
      input: state.newtodo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (target) => {
          dispatch({
              type: 'SET_NEW_TODO',
              newtodo: target.value
          })

          
      },
      add:(input)=>{
        let obj={}
        let checked=false
        let inputvalue=input
        let id=Math.floor(Math.random()*1000)
        obj={inputvalue,id,checked}

        if (inputvalue!=='')
        {dispatch({
          type: 'ADD_TODO',
          anothertodo:obj
      })}
      console.log(obj)

      dispatch({
        type: 'SET_TO_EMPTY'
    })
      }
       
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodoContainer)
;