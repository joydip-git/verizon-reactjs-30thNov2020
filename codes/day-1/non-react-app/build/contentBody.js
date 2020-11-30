define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.contentBody = void 0;

  var contentBody = function contentBody() {
    var bodyContent = "\n    React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. \n    \n    Declarative views make your code more predictable and easier to debug.";
    var bodyElement = document.createElement('div');
    bodyElement.innerHTML = bodyContent;
    bodyElement.style.backgroundColor = 'azure';
    bodyElement.style.fontFamily = 'Segoe UI';
    bodyElement.style.fontSize = 'medium';
    bodyElement.style.border = '1px solid green';
    bodyElement.style.borderRadius = '5px';
    return bodyElement;
  };

  _exports.contentBody = contentBody;
});