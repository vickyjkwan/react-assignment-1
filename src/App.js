import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

// 1. Create TWO new components: UserInput and UserOutput
// 2. UserInput should hold an input element, UserOutput two paragraphs
// 3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
// 4. Pass a username (of your choice) to UserOutput via props and display it there
// 5. Add state to the App component (=> the username) and pass the username to the UserOutput component
// 6. Add a method to manipulate the state (=> an event-handler method)
// 7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// 8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// 9. Add two-way-binding to your input (in UserInput) to also display the starting username
// 10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets



class App extends Component {
  state = {
    persons: [
      { name: 'Vicky' },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        { name: newName }
      ]
    })
  }

  nameChangedHandler =(event) => {
    this.setState({
      persons:[
        { name: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          onClick={() => this.switchNameHandler('Kona')}/>
        <UserOutput 
          userName={this.state.persons[0].name}
          click={this.switchNameHandler.bind(this, 'Kent')}
          changed={this.nameChangedHandler}/>
        <UserOutput userName={this.state.persons[0].name}/>
        <UserOutput userName={this.state.persons[0].name}/>
      </div>
    );
  }
}
  

export default App;
