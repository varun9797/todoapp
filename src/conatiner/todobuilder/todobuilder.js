import React, { Component } from 'react';
import './todobuilder.css';
import TodoList from './../../comonents/todolist/todolist';
import TodoController from './../../comonents/todoContorller/todoController';


class TodoBuilder extends Component {
    globalCount = 0;
    state = {
        currentView:"all",
        currentTodo:{
                id:1,
                title:'Hii',
                desc:'desc',
                startDate:new Date(),
                endDate:new Date(),
                isCompleted:false
        },
        todoListArray:[
            {
                id:1,
                title:'Hii',
                desc:'desc',
                startDate:new Date(),
                endDate:new Date(),
                isCompleted:false
            },
            {
                id:2,
                title:'Hii',
                desc:'desc',
                startDate:new Date(),
                endDate:new Date(),
                isCompleted:true
            }
        ]
    }
    componentDidMount(){
        this.globalCount = this.state.todoListArray.length
    }
    updateStateProps(e){
         console.log("***&&^^^",e.target.type);
        // console.log("***&&^^^",e.target.name);
        //let field = e.target.name
        console.log({
            [e.target.name] : e.target.value
        })
        let currentObject = {...this.state.currentTodo};
        this.setState({
            currentTodo: currentObject
        })
    }

    updateIscheckedState (e, i) {
        console.log("********>>>>>>>",e.target.checked, i);
        let todoArray = [...this.state.todoListArray];
        let indexedObject = {...todoArray[i]}
        indexedObject.isCompleted = e.target.checked;
        todoArray[i] = indexedObject;
        this.setState({
            todoListArray: todoArray
        })
    }

    addToDoList(){
        let currentToDoList = {...this.state.currentTodo};
        currentToDoList.id = this.globalCount + 1
        this.globalCount = this.globalCount + 1;
        let todoListArray = [...this.state.todoListArray];
        todoListArray.push(currentToDoList);
        this.setState({
            todoListArray:todoListArray
        })
    }
    deleteToDo(id){
        var filtered =  this.state.todoListArray.filter(function(el) { return el.id !== id; }); 
        console.log(filtered);
        this.setState({
            todoListArray:filtered
        })

    }
    setCurrentView(e){
        this.setState({
            currentView : e.target.value
        })
    }
    render(){
        return (
            
            <div className="builder-grid">
                <div>
                    <TodoList todoList={this.state.todoListArray}
                     updateProps={(e)=>this.updateStateProps(e)}
                     updateIscheckedState= {(e, i)=> this.updateIscheckedState(e, i)}
                     currentTodoObject={this.state.currentTodo}
                     deleteToDo={(id)=>this.deleteToDo(id)}
                     currentView={this.state.currentView}
                     setCurrentView={(e)=>this.setCurrentView(e)}/>
                </div>
                <div>
                    <TodoController currentTodoObject={this.state.currentTodo}
                    updateProps={(e)=>this.updateStateProps(e)}
                    addToDoList={()=>this.addToDoList()}/>
                </div>
            </div>
        )
    }
}

export default TodoBuilder;