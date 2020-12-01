import React, { Component } from 'react'
import { personData } from './data/personData'
import Person from './Person';

class PersonList extends Component {

    constructor() {
        super()
        console.log('[PL] created....')

        this.state = {
            people: personData
        }
    }
    updatePersonHandler = (personId, propName, newPropValue) => {
        let copyPeople = [...this.state.people]
        let foundPerson = copyPeople.find(p => p.id === personId)
        let foundPersonIndex = copyPeople.findIndex(p => p.id === personId)

        let copyFoundPerson = { ...foundPerson }
        copyFoundPerson[propName] = newPropValue
        copyPeople[foundPersonIndex] = copyFoundPerson

        this.setState({
            people: copyPeople
        }, () => console.log(this.state))

        console.log(this.state)
    }

    render() {
        console.log('[PL] rendered')
        return (
            <div>
                {

                    this.state.people.map(
                        (p, index) => {
                            return <Person personRecord={p} updateHandler={this.updatePersonHandler} key={p.id} />
                        }
                    )
                }
            </div>
        )
    }
}
export default PersonList;
/**
 * [
 * {key:1},
 * {key:2},
 * {key:3}
 * ]
 *
 * [
 * {key:1},
 * {key:3},
 * {key:2}
 * ]
 */
