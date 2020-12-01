define(["./App"], function (_App) {
  "use strict";

  //import App from './App'
  var appDesign = (0, _App.App)();
  var placeholder = document.getElementById('app');
  placeholder.appendChild(appDesign);
});