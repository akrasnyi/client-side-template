webpackJsonp([5],{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(130);
var component;
var desc = {
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            __webpack_require__.e/* require.ensure */(1).then((function() {/* WEBPACK VAR INJECTION */(function(module) {
                var module = __webpack_require__(373);
                component = module.__esModule ? module["default"] : module;
                if (component.willTransitionTo) { 
                    component.willTransitionTo(transition, params, query, callback);
                    if (component.willTransitionTo.length < 4) {
                        callback(); 
                    }
                } 
                else {
                    callback();
                }
            
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(131)(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        },
        willTransitionFrom: function(transition, component, callback) {
            var componentClass = component && component.state ? component.state.component : null;
            if (componentClass && componentClass.willTransitionFrom) {
                componentClass.willTransitionFrom(transition, component.refs["componentProxy"], callback);
                if (componentClass.willTransitionFrom.length < 3) {
                    callback(); 
                }
            }
            else {
                callback();
            }
        }
    }, 
    loadComponent: function(callback) {
        if(!component) {
            __webpack_require__.e/* require.ensure */(1).then((function() {/* WEBPACK VAR INJECTION */(function(module) {
                var module = __webpack_require__(373);
                component = module.__esModule ? module["default"] : module;
                if(callback) callback(component);
            
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(131)(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        } else if(callback) callback(component);
        return component;
    }
};
var mixinReactProxy = __webpack_require__(132);
mixinReactProxy(React, desc);
module.exports = React.createClass(desc);
module.exports.Mixin = desc;

/***/ })

});
//# sourceMappingURL=5.73eee350cb4caf21093c.js.map