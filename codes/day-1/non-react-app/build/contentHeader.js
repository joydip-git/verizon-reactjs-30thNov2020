define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.contentHeader = void 0;

  //function: component
  //returns value (HTML element)
  //ES6 module
  var contentHeader = function contentHeader() {
    var headerContent = 'Introduction to React JS';
    var headerElement = document.createElement('h3');
    headerElement.innerHTML = headerContent;
    headerElement.style.backgroundColor = 'burlywood';
    headerElement.style.fontFamily = 'Segoe UI';
    headerElement.style.border = '1px solid aquamarine';
    headerElement.style.borderRadius = '5px';
    return headerElement;
  };
  /**
   * module.exports={contentHeader:contentHeader}
   */


  _exports.contentHeader = contentHeader;
});