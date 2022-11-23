/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
var Rules = /** @class */ (function () {
    function Rules() {
    }
    Rules.prototype.checkRule = function () {
        console.log('rule');
        this.checkE();
    };
    Rules.prototype.checkE = function () {
        console.log('check fail');
    };
    return Rules;
}());
__webpack_unused_export__ = new Rules();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map