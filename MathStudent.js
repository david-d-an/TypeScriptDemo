"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var s = require("./Student");
var MathStudent = /** @class */ (function (_super) {
    __extends(MathStudent, _super);
    function MathStudent(name, studentId) {
        return _super.call(this, name, studentId) || this;
    }
    MathStudent.prototype.Serialize = function () {
        return _super.prototype.Serialize.call(this);
    };
    return MathStudent;
}(s.Student));
exports.MathStudent = MathStudent;
