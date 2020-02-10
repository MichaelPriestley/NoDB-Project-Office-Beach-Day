import React from 'react'

function ButtonControl(props) {
    return (
        <div className="buttons">
                    <button onClick={() => props.moveToTeamVoldemort(props.employee)}>Voldemort</button>
                    <button onClick={() => props.moveToTeamGryffindor(props.employee)}>Gryffindor</button>
                    <button onClick={() => props.moveToTeamUSA(props.employee)}>U.S.A</button>
                    <button onClick={() => props.moveToTheBlueTeam(props.employee)}>Blue Team</button>
                </div>
    )
        
}

export default ButtonControl