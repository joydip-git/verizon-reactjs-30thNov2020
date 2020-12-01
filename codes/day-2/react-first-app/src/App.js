import React from 'react'
import HeaderComp from './HeaderComp'
import DescriptionComp from './DescriptionComp'

export const App = () => {

    const headerDesign = HeaderComp();
    const descriptionDesign = DescriptionComp()

    let appElement = null;

    //HTML element
    // appElement = document.createElement('div')
    // appElement.id='mainDiv'    

    //styles for the HTML element
    //appElement.style.fontFamily = 'Segoe UI'
    //appElement.style.fontSize = 'medium'

    //adding content to be displayed
    //appElement.innerHTML = content;

    //React Element
    const divstyle = {
        fontFamily: 'Segoe UI',
        fontSize: 'medium'
    }
    appElement = React.createElement(
        'div',
        {
            id: 'mainDiv',
            style: divstyle
        },
        [headerDesign, descriptionDesign]
    );

    return appElement;
}
//export default App;