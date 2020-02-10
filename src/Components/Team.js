import React from 'react'
import EmployeesV from './EmployeesV'
import EmployeesG from './EmployeesG'
import EmployeesU from './EmployeesU'
import EmployeesB from './EmployeesB'

function Team (props) {
    const voldemort = props.teamVoldemort.map(employee => {
        console.log(employee)
        return <EmployeesV 
            key={employee.id}
            employee={employee}
            saveNameVoldemort={props.saveNameVoldemort}
            fireEmployeeVoldemort={props.fireEmployeeVoldemort}
        />
    })
    
    const gryffindor = props.teamGryffindor.map(employee => {
        return <EmployeesG 
            key={employee.id}
            employee={employee}
            saveNameGryffindor={props.saveNameGryffindor}
            fireEmployeeGryffindor={props.fireEmployeeGryffindor}
        />
    })

    const usa = props.teamUSA.map(employee => {
        return <EmployeesU 
            key={employee.id}
            employee={employee}
            saveNameUSA={props.saveNameUSA}
            fireEmployeeUSA={props.fireEmployeeUSA}
        />
    })

    const blue = props.theBlueTeam.map(employee => {
        return <EmployeesB
            key={employee.id}
            employee={employee}
            saveNameBlue={props.saveNameBlue}
            fireEmployeeBlue={props.fireEmployeeBlue}
         />
    })


    return (
        <div className="teams">
            <div style={{ width: "20%" }} >
                <h2 className="team-name">Team Voldemort</h2>
                <div className="jim">
                    <h3>Capitain: Jim</h3>
                </div>
                <span >{voldemort}</span>
            </div>
            <div style={{ width: "20%" }}>
                <h2 className="team-name">Team Gryffindor</h2>
                <div className="dwight">
                <h3>Captain: Dwight</h3>
                 </div>
                {gryffindor}
            </div>
            <div style={{ width: "20%" }}>
                <h2 className="team-name">Team U.S.A.</h2>
                <div className="andy">
                <h3>Captain: Andy</h3>
                </div>
                {usa}
            </div>
            <div style={{ width: "20%" }}>
                <h2 className="team-name">The Blue Team</h2>
                <div className="stanley">
                <h3>Captain: Stanley</h3></div>
                {blue}
            </div>

        </div>
    )
}

export default Team