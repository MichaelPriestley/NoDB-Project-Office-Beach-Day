const data = require('../data.json')

module.exports = {

getEmployeePool: (req, res) => {
    res.status(200).send(data)
    }    
}