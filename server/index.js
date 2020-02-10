const express = require('express')
const cors = require('cors')
const employeeCtrl = require('./Controllers/employeeController')
const employeeTeamCtrl = require('./Controllers/employeeTeamController')
const app = express()

const PORT = 3001

app.use(express())
app.use(cors())
app.use(express.json())

app.get('/api/employees', employeeCtrl.getEmployeePool)
app.post('/api/employeesV', employeeTeamCtrl.moveToTeamVoldemort)
app.post('/api/employeesG', employeeTeamCtrl.moveToTeamGryffindor)
app.post('/api/employeesU', employeeTeamCtrl.moveToTeamUSA)
app.post('/api/employeesB', employeeTeamCtrl.moveToTheBlueTeam)
app.put('/api/employees/:id', employeeTeamCtrl.saveNameVoldemort)
app.put('/api/employees/:id', employeeTeamCtrl.saveNameGryffindor)
app.put('/api/employees/:id', employeeTeamCtrl.saveNameUSA)
app.put('/api/employees/:id', employeeTeamCtrl.saveNameBlue)
app.delete('/api/employees/:id', employeeTeamCtrl.fireEmployeeVoldemort)
app.delete('/api/employees/:id', employeeTeamCtrl.fireEmployeeGryffindor)
app.delete('/api/employees/:id', employeeTeamCtrl.fireEmployeeUSA)
app.delete('/api/employees/:id', employeeTeamCtrl.fireEmployeeBlue)

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))