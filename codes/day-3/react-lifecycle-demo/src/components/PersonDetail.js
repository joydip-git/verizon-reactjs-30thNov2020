import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getPersonById } from '../data/personData'

export default class PersonDetail extends Component {
    constructor() {
        super()
        console.log('[PersonDetail] constructor')
    }
    state = {
        personInfo: null
    }
    static propTypes = {
        personId: PropTypes.number.isRequired
    }

    render() {
        console.log('[PersonDetail] rendered')
        console.log(this.props)
        let design = null;
        const { personInfo } = this.state;
        if (personInfo !== null) {
            design = (
                <form style={{ backgroundColor: "burlywood" }}>
                    <table style={{ margin: '10px' }}>
                        <tr>
                            <td>Id:</td>
                            <td><input type='text' value={personInfo.id} readOnly /></td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td><input type='text' value={personInfo.name} /></td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td><input type='text' value={personInfo.age} /></td>
                        </tr>
                        <tr>
                            <td>Place:</td>
                            <td><input type='text' value={personInfo.location} /></td>
                        </tr>
                    </table>
                    <input type='submit' value='Update' />
                </form>
            )
        } else {
            design = <span>Loading...</span>
        }

        return design;
    }
    componentDidUpdate() {
        console.log('[PersonDetail] updated')
        if (this.state.personInfo.id !== this.props.personId)
            this.getDataAndSetState()
    }

    componentDidMount() {
        console.log('[PersonDetail] mounted')
        this.getDataAndSetState()
    }
    getDataAndSetState = () => {
        const personObj = getPersonById(this.props.personId)
        if (personObj !== undefined) {
            this.setState({
                personInfo: personObj
            })
        }
    }
}
// PersonDetail.propTypes={

// }

//component instance
/**
* const pdRef = new PersonDetail()
* pdRef.state = {x:20}
  old/previous state --> {x:10}
* pdRef.props = {personId:3, children:[]}
old property object-->{ personId: 2, children:[]}
*/
//Root React element
/**
 * {
 *   type:'div',
 *   props:{
 *     personId: 1,
 *     children:[]
 *   }
 * }
 *
 * {
 *   type:'div',
 *   props:{
 *     personId: 2,
 *     children:[]
 *   }
 * }
 *
 * {
 *   type:'div',
 *   props:{
 *     personId: 3,
 *     children:[]
 *   }
 * }
 */
