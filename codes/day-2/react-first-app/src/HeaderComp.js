import React from 'react'

//content-->{headerData:headerContent}
const HeaderComp = (content) => {
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
        content.headerData)

    return headerElement;
}
export default HeaderComp;