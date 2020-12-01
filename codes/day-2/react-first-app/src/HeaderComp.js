import React from 'react'

//content-->{headerData:headerContent}
const HeaderComp = (content) => {
    /* <h3 id='' style=''>....</h3>
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
        */
    //JSX-->JavaScript XML
    const headerElement = (
        <h3
            id='mainHeader'
            style={
                {
                    fontFamily: 'Arial',
                    border: '1px solid azure',
                    borderRadius: '5px'
                }
            }>
            {content.headerData}
        </h3>
    )

    return headerElement;
}
export default HeaderComp;