import React, {Component} from 'react';
import './App.css';
import Finder from './Components/Finder'
import Header from './Components/Header'
import Team from './Components/Team'
import Employees from './Components/Employees'

class App extends Component {
  constructor() {
    super()

    this.state = {
      teamVoldemort: [],
      teamGryffindor: [],
      teamUSA: [],
      theBlueTeam: []
    }

  }

  moveToTeamVoldemort = employee => {

  }

  moveToTeamGryffindor = employee => {

  }

  moveToTeamUSA = employee => {

}

  moveToTheBlueTeam = employee => {

  }

  saveNameVoldemort(id, newName) {

  }

  saveNameGryffindor(id, newName) {

  }

  saveNameUSA(id, newName) {

  }

  saveNameBlue(id, newName) {

  }

  fireEmployeeVoldemort(id) {

  }

  fireEmployeeGryffindor(id) {

  }

  fireEmployeeUSA(id) {

  }

  fireEmployeeBlue(id) {
    
  }

  render() {
    return (
      <div>
        <Header /> 
        <Finder />
        <Employees />
        App.js
        <Team />
      </div>
    )
  }

}

export default App;
