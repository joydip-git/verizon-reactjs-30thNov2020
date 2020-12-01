import React, { Component } from 'react'
import { personData } from './data/personData'
import Person from './Person';

class PersonList extends Component {

    constructor(){
        super()
        console.log('[PL] created....')
    }

    //initial state
    state = {
        count: 0,
        people: personData
    }

    /**
     * state={count:10, people:personData}
     */

    increaseCounter = () => {
        // this.setState({
        //     count: 10
        // })
        this.setState(
            (previousState) => {
                console.log(previousState)
                return {
                    count: previousState.count + 1
                }
            },
            () => {
                console.log(this.state)
            }
        )
    }
    render() {
        console.log('[PL] rendered')
        return (
            <Person
                data={personData[2]}
                handler={this.increaseCounter}
                countData={this.state.count}
            />
        )
    }
}
export default PersonList;

/**
 * Person({data:{id:1, name:'anil', age:20, location:'bangalore'}})
 */