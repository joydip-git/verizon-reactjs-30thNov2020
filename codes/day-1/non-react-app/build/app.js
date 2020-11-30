define(["exports", "./contentHeader", "./contentBody"], function (_exports, _contentHeader, _contentBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.add = void 0;

  var app = function app() {
    var headerDesign = (0, _contentHeader.contentHeader)();
    var bodyDesign = (0, _contentBody.contentBody)();
    var appElement = document.createElement('div');
    appElement.appendChild(headerDesign);
    appElement.appendChild(bodyDesign);
    return appElement;
  };

  var add = function add(a, b) {
    return a + b;
  };

  _exports.add = add;
  var _default = app; //const {contentHeader} = require('./contentHeader')
  //module.exports["default"]=app;
  //module.exports.add = add;

  /**
   * {
   *      default:app,
   *      add:add
   * }
   */

  _exports["default"] = _default;
});