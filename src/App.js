import React, {Component} from 'react';
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";

class App extends Component{

state = {
  newTask: "",
  todos: [
  
  {text: 'React.js'},
  {text: 'Vue.js'},
  {text: 'Angular.js'},
  {text: 'Node.js'}

]
}
//bind function
completeTask = (index)=>{
//copy item array
const todos = [...this.state.todos];
todos.splice(index, 1);
this.setState({
todos
});
}

//bind function
addTask = ()=>{
  const todos = [...this.state.todos];
  todos.push({
 text: this.state.newTask
  });
  this.setState({
    todos,
    newTask: ''
    });    
} 

//bind function 
updateNewTask = (event)=>{
  
  this.setState({
    newTask: event.target.value
    });
}

  render() {
    return (
      <div className="App">
       {this.state.todos.map((todo, index) => <Task todo={todo} completeTask={()=>this.completeTask(index)} index={index} key={index} />)} 
      <CreateTask value={this.state.newTask} onChange={this.updateNewTask} addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
