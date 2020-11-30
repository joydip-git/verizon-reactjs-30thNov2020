import { contentHeader } from './contentHeader'
import { contentBody } from './contentBody'

const app = () => {
    const headerDesign = contentHeader();
    const bodyDesign = contentBody();

    const appElement = document.createElement('div')
    appElement.appendChild(headerDesign)
    appElement.appendChild(bodyDesign);

    return appElement;
}
export const add = (a, b) => (a + b)
export default app;

//const {contentHeader} = require('./contentHeader')
//module.exports["default"]=app;
//module.exports.add = add;
/**
 * {
 *      default:app,
 *      add:add
 * }
 */