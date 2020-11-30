function contentHeader() {
    var headerContent = 'Introduction to React JS'

    var headerElement = document.createElement('h3');
    headerElement.innerHTML = headerContent;

    headerElement.style.backgroundColor = 'burlywood'
    headerElement.style.fontFamily = 'Segoe UI'
    headerElement.style.border = '1px solid aquamarine'
    headerElement.style.borderRadius = '5px'

    return headerElement;
}