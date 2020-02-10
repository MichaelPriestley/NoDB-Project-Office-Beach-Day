import React, {Component} from 'react'
import '../App.css'

class EmployeesV extends Component {
    constructor(props) {
        super(props)

            this.state = {
                nameChange: false,
                userInput: ""
            }

    }

    toggleNameChange = () => {
        this.setState({
            nameChange: !this.state.nameChange
        })
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="team-view">
                {this.state.nameChange ? (
                    <div>
                        <input onChange={this.handleChange}/>
                        <button onClick={() => {
                            this.props.saveNameVoldemort(this.props.employee.id, this.state.userInput)
                            this.toggleNameChange()
                        }}>Save</button>
                    </div>
                ) : (
                <p onDoubleClick={this.toggleNameChange}>{this.props.employee.name}</p>)}
                <img style={{  height: "20%" ,width: "10%"}} alt={''} src={this.props.employee.image}/>
                    <div>
                <button onClick={() => this.props.fireEmployeeVoldemort(this.props.employee.id)}>Fire</button>
                    </div>
            </div>
        )
    }
}

export default EmployeesV