import React from 'react';
import List from './components/list/list';
import Form from './components/form/form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      userList: [],
    }
  }
changeValue = (event) => {
 event.preventDefault();
 this.setState({
   inputValue: event.target.value,
 })
}
addUser = (event) => {
event.preventDefault();
let tempArray = this.state.userList
tempArray.push(this.state.inputValue);
this.setState({
  userList: tempArray,
  inputValue: '',
})
}
removeUser = (event) => {
  let temparray = this.state.userList
  temparray.splice(event.target.dataset.index, 1);
  this.setState({
    userList: temparray
  })
}

  render() {
    return(
      <div>
      <Form inputValue={this.state.inputValue} changeValue={this.changeValue} addUser={this.addUser} removeUser={this.removeUser}/>
      <List userList={this.state.userList} removeUser={this.removeUser}/>
      </div>
    ) 
  }
}

export default App;
//spice usuwa wybrany element z tablicy
//pop usuwa ostatni 