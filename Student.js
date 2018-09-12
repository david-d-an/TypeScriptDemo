"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(name, uid) {
        if (name)
            this.Name = name;
        else
            this.Name = "David";
        if (uid)
            this.StudentId = uid;
        else
            this.StudentId = 123;
    }
    Student.prototype.Serialize = function () {
        return { name: this.Name, StudentId: this.StudentId };
    };
    return Student;
}());
exports.Student = Student;
