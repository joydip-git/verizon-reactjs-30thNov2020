function app(){
    var headerDesign = contentHeader();
    var bodyDesign = contentBody();

    var appElement = document.createElement('div')
    appElement.appendChild(headerDesign)
    appElement.appendChild(bodyDesign);

    return appElement;
}