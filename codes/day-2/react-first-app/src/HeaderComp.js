import React from 'react'
const HeaderComp = () => {
    const content = 'Introduction to React JS'

    const headerElement = React.createElement(
        'h3',
        {
            id: 'mainHeader',
            style: {
                fontFamily: 'Arial',
                border: '1px solid azure',
                borderRadius: '5px'
            }
        },
        content)

    return headerElement;
}
export default HeaderComp;