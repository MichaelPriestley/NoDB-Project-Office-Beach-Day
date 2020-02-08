const teamVoldemort = []
const teamGryffindor = []
const teamUSA = []
const theBlueTeam = []

let id = 0

module.exports = {

moveToTeamVoldemort: (req, res) => {
    const {employee} = req.body
    employee.id = id
    id++

    teamVoldemort.push(employee)
    res.status(200).send(teamVoldemort)
},

moveToTeamGryffindor: (req, res) => {
    const {employee} = req.body
    employee.id = id
    id++

    teamGryffindor.push(employee)
    res.status(200).send(teamGryffindor)
},

moveToTeamUSA: (req, res) => {
    const {employee} = req.body
    employee.id = id
    id++

    teamUSA.push(employee)
    res.status(200).send(teamUSA)
},

moveToTheBlueTeam: (req, res) => {
    const {employee} = req.body
    employee.id = id

    theBlueTeam.push(employee)
    res.status(200).send(theBlueTeam)
},

saveNameVoldemort: (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const {index} = teamVoldemort.findIndex(employee => {
        return element.id === id
    })

    teamVoldemort[index].name = name
    res.status(200).send(teamVoldemort)
},

saveNameGryffindor: (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const index = teamGryffindor.findIndex(employee => {
        return employee.id === id
    })

    teamGryffindor[index].name = name
    res.status(200).send(teamGryffindor)
    },

saveNameUSA: (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const index = teamUSA.findIndex(employee => {
        return employee.id === id
    })

    teamUSA[index].name = name
    res.status(200).send(teamUSA)
},

saveNameBlue: (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const index = theBlueTeam.findIndex(employee => {
        return employee.id === id
    })

    theBlueTeam[index].name = name
    res.status(200).send(theBlueTeam)
},

fireEmployeeVoldemort: (req, res) => {
    const {id} = req.params

    const index = teamVoldemort.findIndex(employee => {
        return employee.id === id
    })

    teamVoldemort[index].splice(index, 1)
    res.status(200).send(teamVoldemort)
},

fireEmployeeGryffindor: (req, res) => {
    const {id} = req.params

    const index = teamGryffindor.findIndex(employee => {
        return employee.id === id
    })

    teamGryffindor[index].splice(index, 1)
    res.status(200).send(teamGryffindor)
},

fireEmployeeUSA: (req, res) => {
    const {id} = req.params

    const index = teamUSA.findIndex(employee => {
        return employee.id === id
    })

    teamUSA[index].splice(index, 1)
    res.status(200).send(teamUSA)
},

fireEmployeeBlue: (req, res) => {
    const {id} = req.params

    const index = theBlueTeam.findIndex(employee => {
        return employee.id === id
    })

    theBlueTeam[index].splice(index, 1)
    res.status(200).send(theBlueTeam)
}


}