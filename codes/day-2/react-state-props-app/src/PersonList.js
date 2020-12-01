import React, { Component } from 'react'
import { personData } from './data/personData'
import Person from './Person';

class PersonList extends Component {

    state = {
        count: 0,
        people: personData
    }

    increaseCounter = () => {
        this.setState({
            count: 10
        })
    }
    render() {
        return (
            <Person
                data={personData[2]}
                handler={this.increaseCounter}
            />
        )
    }
}
export default PersonList;

/**
 * Person({data:{id:1, name:'anil', age:20, location:'bangalore'}})
 */