import React from 'react'
//content-->{ descData: descContent }
const DescriptionComp = (content) => {
    const descriptionElement = React.createElement(
        'p',
        {
            id: 'contentPara',
            style: {
                fontFamily: 'Segoe UI',
                fontSize: 'medium',
                border: '1px solid black',
                borderRadius: '5px'
            }
        },
        content.descData
    )

    return descriptionElement;
}
export default DescriptionComp;