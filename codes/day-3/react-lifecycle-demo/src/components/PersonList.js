import React, { Component } from 'react'
import Person from './Person'
import { getPeople, updatePeople } from '../data/personData'
import PersonDetail from './PersonDetail'

export default class PersonList extends Component {
    constructor() {
        super()
        console.log('[PersonList] constructor')
        // this.state = {
        //     people: getPeople()
        // }
        // this.updatePersonHandler = this.updatePersonHandler.bind(this);
    }
    state = {
        people: [],
        selectedPersonId: null
    }
    updateSelectedPersonIdHandler = (personId) => {
        this.setState({
            selectedPersonId: personId
        })
    }
    updatePersonHandler = (updatedPerson) => {
        let foundIndex = this.state.people.findIndex(p => p.id === updatedPerson.id)
        let peopleCopy = [...this.state.people]
        peopleCopy[foundIndex] = updatedPerson;

        updatePeople(peopleCopy);       
        this.setState({
            people: peopleCopy
        })
    }
    render() {
        console.log('[PersonList] rendered')
        const { people, selectedPersonId } = this.state;
        return (
            <div style={{ width: '450px' }}>
                <div style={{ float: "left" }}>
                    <br />
                    {
                        (people.length > 0) ?
                            people.map(p => {
                                return <Person personData={p} key={p.id} selectPersonIdHandler={this.updateSelectedPersonIdHandler} />
                            }) :
                            <span>Loading data....</span>
                    }
                </div>
                <div style={{ float: "right" }}>
                    {
                        (selectedPersonId !== null) && <PersonDetail personId={selectedPersonId} updatePerson={this.updatePersonHandler} />
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log('[PersonList] mounted in ADOM')
        const peopleArray = getPeople();
        this.setState({
            people: peopleArray
        })
    }

    componentWillUnmount() {
        console.log('[PersonList] unmounted from ADOM')
    }
}
