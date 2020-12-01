//import App from './App'
import { App } from './App'
import ReactDOM from 'react-dom'

const appDesign = App()
const placeholder = document.getElementById('app')
//placeholder.appendChild(appDesign)
ReactDOM.render(appDesign, placeholder);