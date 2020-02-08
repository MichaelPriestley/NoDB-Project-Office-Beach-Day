import React, {Component} from 'react'
import axios from 'axios'

class Finder extends Component {
    constructor(props) {
        super(props)

            this.state = {
                employees: [],
            }
    }

componentDidMount() {
    axios.get('/api/employees').then(response => {
        this.setState({
            employees: response.data
        })
    })
}

render() {
    return (
        <div>Finder.js</div>
    )
}

}

export default Finder