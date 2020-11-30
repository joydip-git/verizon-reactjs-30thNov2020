const app = () => {
    const headerDesign = contentHeader();
    const bodyDesign = contentBody();

    const appElement = document.createElement('div')
    appElement.appendChild(headerDesign)
    appElement.appendChild(bodyDesign);

    return appElement;
}