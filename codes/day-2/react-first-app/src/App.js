import React from 'react'
import HeaderComp from './HeaderComp'
import DescriptionComp from './DescriptionComp'

/*
export const App = () => {

    let headerContent = 'Introduction to React JS'
    let descContent = 'React JS is a library. Helps to create client side UI driven application with RAD feature'

    const headerDesign = HeaderComp({ headerData: headerContent });
    const descriptionDesign = DescriptionComp({ descData: descContent })

    let appElement = null;

    //HTML element
    // appElement = document.createElement('div')
    // appElement.id='mainDiv'

    //styles for the HTML element
    //appElement.style.fontFamily = 'Segoe UI'
    //appElement.style.fontSize = 'medium'

    //adding content to be displayed
    //appElement.innerHTML = content;


    const buttonElement = React.createElement(
        'button',
        {
            onClick: () => { window.alert('change data') }
        },
        'Change Data'
    )

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
        [headerDesign, descriptionDesign, buttonElement]
    );

    return appElement;
}
*/
const App = () => {

    //data
    let headerContent = 'Introduction to React JS'

    let descContent = 'React JS is a library. Helps to create client side UI driven application with RAD feature'

    //const headerDesign = HeaderComp({ headerData: headerContent });
    // const descriptionDesign = DescriptionComp({ descData: descContent })
    //const headerDesign = <HeaderComp headerData={headerContent} />
    // const descriptionDesign = <DescriptionComp descData={descContent} />

    const divstyle = {
        fontFamily: 'Segoe UI',
        fontSize: 'medium'
    }

    const call = () => window.alert('change data');
    const appElement = (
        <div id='mainDiv' style={divstyle}>
            {/*{headerDesign}*/}
            <HeaderComp headerData={headerContent} />
            <br />
            {/*{descriptionDesign}*/}
            <DescriptionComp descData={descContent} />
            <br />
            <button onClick={call}>
                Change Data
            </button>
        </div>
    )

    return appElement;

}

export default App;