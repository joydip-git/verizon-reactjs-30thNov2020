import React, { Component } from 'react'
import Person from './Person'
import { getPeople } from '../data/personData'

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
        people: []
    }
    updatePersonHandler = () => {
        console.log(this)
    }
    render() {
        console.log('[PersonList] rendered')
        return (
            <div>
                <br />
                {
                    (this.state.people.length > 0) ?
                        this.state.people.map(p => {
                            return <Person personData={p} key={p.id} />
                        }) :
                        <span>Loading data....</span>
                }
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
