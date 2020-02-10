import React, {Component} from 'react';
import './App.css';
import Finder from './Components/Finder'
import Header from './Components/Header'
import Team from './Components/Team'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      teamVoldemort: [],
      teamGryffindor: [],
      teamUSA: [],
      theBlueTeam: [],
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

  saveNameVoldemort = (id, newName) => {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        teamVoldemort: response.data
      })
    })
  }

  saveNameGryffindor = (id, newName) => {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        teamGryffindor: response.data
      })
    })
  }

  saveNameUSA = (id, newName) => {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        teamUSA: response.data
      })
    })
  }

  saveNameBlue = (id, newName) => {
    axios.put(`/api/employees/${id}`, {name: newName}).then(response => {
      this.setState({
        theBlueTeam: response.data
      })
    })
  }

  fireEmployeeVoldemort = id => {
    axios.delete(`/api/employees/${id}`).then(response => {
      this.setState({
        teamVoldemort: response.data
      })
    })
  }

  fireEmployeeGryffindor = id => {
    axios.delete(`/api/employees/${id}`).then(response => {
      this.setState({
        teamGryffindor: response.data
      })
    })
  }

  fireEmployeeUSA = id => {
    axios.delete(`/api/employees/${id}`).then(response => {
      this.setState({
        teamUSA: response.data
      })
    })
  }

  fireEmployeeBlue = id => {
    axios.delete(`/api/employees/${id}`).then(response => {
      this.setState({
        theBlueTeam: response.data
      })
    })
  }

  render() {
    return (
      <div className="background">
        <Header /> 
        <Finder 
          moveToTeamVoldemort={this.moveToTeamVoldemort}
          moveToTeamGryffindor={this.moveToTeamGryffindor}
          moveToTeamUSA={this.moveToTeamUSA}
          moveToTheBlueTeam={this.moveToTheBlueTeam}/>
        
        <Team
         saveNameVoldemort={this.saveNameVoldemort}
          saveNameGryffindor={this.saveNameGryffindor}
          saveNameUSA={this.saveNameUSA}
          saveNameBlue={this.saveNameBlue}
          fireEmployeeVoldemort={this.fireEmployeeVoldemort}
          fireEmployeeGryffindor={this.fireEmployeeGryffindor}
          fireEmployeeUSA={this.fireEmployeeUSA}
          fireEmployeeBlue={this.fireEmployeeBlue}
          teamVoldemort={this.state.teamVoldemort}
          teamGryffindor={this.state.teamGryffindor}
          teamUSA={this.state.teamUSA}
          theBlueTeam={this.state.theBlueTeam}
         />
      </div>
    )
  }

}

export default App;
