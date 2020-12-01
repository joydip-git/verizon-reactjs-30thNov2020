import React from 'react'

const DescriptionComp = () => {
    const content = 'React JS is a library. Helps to create client side UI driven application with RAD feature'

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
        content
    )

    return descriptionElement;
}
export default DescriptionComp;