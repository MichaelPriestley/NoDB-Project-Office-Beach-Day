import React, {Component} from 'react'
import axios from 'axios'
import EmployeeDisplay from './EmployeeDisplay'
import '../App.css'

class Finder extends Component {
    constructor(props) {
        super(props)

            this.state = {
                employees: [],
            }
    }

componentDidMount = () => {
    axios.get('/api/employees').then(response => {
        this.setState({
            employees: response.data
        })
    })
}

render() {
    const employeeList =this.state.employees.map(employee => {
        return (<EmployeeDisplay 
                    key={employee.id}
                    employee={employee}
                    moveToTeamVoldemort={this.props.moveToTeamVoldemort}
                    moveToTeamGryffindor={this.props.moveToTeamGryffindor}
                    moveToTeamUSA={this.props.moveToTeamUSA}
                    moveToTheBlueTeam={this.props.moveToTheBlueTeam}
                />
        )
    })
        return (
            <div className="employee-display">
                {employeeList}
            </div>
        )
    
}

}

export default Finder