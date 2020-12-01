import React, { Component } from 'react'
import { personData } from './data/personData'
import Person from './Person';

class PersonList extends Component {

    constructor() {
        super()
        console.log('[PL] created....')

        this.state = {
            count: 0,
            people: personData
        }
    }

    //initial state -- class property
    // state = {
    //     count: 0,
    //     people: personData
    // }
    updatePerson = (personId, propName, newPropValue) => {
        let copyPeople = [...this.state.people]
        let foundPerson = copyPeople.find(p => p.id === personId)
        let foundPersonIndex = copyPeople.findIndex(p => p.id === personId)

        let copyFoundPerson = { ...foundPerson }
        copyFoundPerson[propName] = newPropValue
        copyPeople[foundPersonIndex] = copyFoundPerson

        this.setState({
            people: copyPeople
        }, () => console.log(this.state))
    }

    increaseCounter = () => {
        // this.setState({
        //     count: 10
        // },()=>{console.log()})

        // let copyState = { ...this.state }
        // copyState[count] = this.state.count + 1
        // this.state = copyState;
        // this.render()

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
                data={this.state.people[2]}
                countData={this.state.count}
                counthandler={this.increaseCounter}
                personhandler={this.updatePerson}
            />
        )
    }
}
export default PersonList;
/**
 * {
 *    data:,
 *    handler:,
 *    countData:undefined
 * }
 */
