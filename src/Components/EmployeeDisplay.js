import React from 'react'
import '../App.css'
import ButtonControl from './ButtonControl'

function EmployeeDisplay(props) {
    return (
        <div className="employee-box">
                    <img className="employee-image" alt={''} src={props.employee.image}/>
                <div className="box-interior">
                    <h2>{props.employee.name}</h2>
                </div>
                <ButtonControl 
                    employee={props.employee}
                    moveToTeamVoldemort={props.moveToTeamVoldemort}
                    moveToTeamGryffindor={props.moveToTeamGryffindor}
                    moveToTeamUSA={props.moveToTeamUSA}
                    moveToTheBlueTeam={props.moveToTheBlueTeam}
                />
        </div>
    )
}

export default EmployeeDisplay