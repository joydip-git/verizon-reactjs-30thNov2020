define(["./app"], function (_app) {
  "use strict";

  _app = _interopRequireDefault(_app);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  //import x, { add as addFn } from './app'
  //addFn()
  var appDesign = (0, _app["default"])();
  var placeholder = document.getElementById('root');
  placeholder.appendChild(appDesign);
});