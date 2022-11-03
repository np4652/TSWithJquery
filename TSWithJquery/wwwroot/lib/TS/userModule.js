var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { app } from "./app.js";
var element;
var jQueryElement;
var _ajax;
var userModule = /** @class */ (function (_super) {
    __extends(userModule, _super);
    function userModule() {
        var _this = _super.call(this) || this;
        _this.setUser = function () {
            element = document.getElementById("");
        };
        _this.changeText = function () {
            jQueryElement = $('#btnChangeText');
            jQueryElement.click(function (e) {
                e.preventDefault();
                jQueryElement.text("Text Chnaged successfully!!!");
            });
        };
        _this._ajax = function (option) {
            console.log('Hit ajax');
            var res = $.ajax(option);
            return res;
        };
        return _this;
    }
    return userModule;
}(app));
export { userModule };
//# sourceMappingURL=userModule.js.map