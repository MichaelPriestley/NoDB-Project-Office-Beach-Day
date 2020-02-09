import React, {Component} from 'react';
import './App.css';
import Finder from './Components/Finder'
import Header from './Components/Header'
import Team from './Components/Team'
import Employees from './Components/Employees'
import axios from 'axios'

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
    axios.post(`/api/employees`, {employee}).then(response => {
      this.setState({
        teamVoldemort: response.data
      })
    })
  }

  moveToTeamGryffindor = employee => {
    axios.post(`/api/employees`, {employee}).then(response => {
      this.setState({
        teamGryffindor: response.data
      })
    })
  }

  moveToTeamUSA = employee => {
    axios.post(`/api/employees`, {employee}).then(response => {
      this.setState({
        teamUSA: response.data
      })
    })
}

  moveToTheBlueTeam = employee => {
    axios.post(`/api/employees`, {employee}).then(response => {
      this.setState({
        theBlueTeam: response.data
      })
    })
  }

  saveNameVoldemort(id, newName) {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        teamVoldemort: response.data
      })
    })
  }

  saveNameGryffindor(id, newName) {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        teamGryffindor: response.data
      })
    })
  }

  saveNameUSA(id, newName) {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        teamUSA: response.data
      })
    })
  }

  saveNameBlue(id, newName) {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        theBlueTeam: response.data
      })
    })
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
