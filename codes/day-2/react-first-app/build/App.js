define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.App = void 0;

  var App = function App() {
    var content = 'Welcome to React JS';
    var appElement = document.createElement('div');
    appElement.innerHTML = content;
    appElement.style.fontFamily = 'Segoe UI';
    appElement.style.fontSize = 'medium';
    return appElement;
  }; //export default App;


  _exports.App = App;
});