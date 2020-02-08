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
app.post('/api/employees', employeeTeamCtrl.moveToTeamVoldemort)
app.post('/api/employees', employeeTeamCtrl.moveToTeamGryffindor)
app.post('/api/employees', employeeTeamCtrl.moveToTeamUSA)
app.post('/api/employees', employeeTeamCtrl.moveToTheBlueTeam)
app.put('/api/employees', employeeTeamCtrl.saveNameVoldemort)
app.put('/api/employees', employeeTeamCtrl.saveNameGryffindor)
app.put('/api/employees', employeeTeamCtrl.saveNameUSA)
app.put('/api/employees', employeeTeamCtrl.saveNameBlue)
app.delete('/api/employees', employeeTeamCtrl.fireEmployeeVoldemort)
app.delete('/api/employees', employeeTeamCtrl.fireEmployeeGryffindor)
app.delete('/api/employees', employeeTeamCtrl.fireEmployeeUSA)
app.delete('/api/employees', employeeTeamCtrl.fireEmployeeBlue)

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))