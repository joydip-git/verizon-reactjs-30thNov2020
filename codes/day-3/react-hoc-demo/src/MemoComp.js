import React from 'react'
import PropTypes from 'prop-types'
import withMemo from './withMemo'

const MemoComp = ({ value, name }) => {
    console.log('[MemoComp] rendered')
    return (
        <div>
            Value:&nbsp;{value}
            <br />
            Name:&nbsp;{name}
        </div>
    )
}

MemoComp.propTypes = {
    value: PropTypes.number,
    name: PropTypes.string
}

export default withMemo(MemoComp)
