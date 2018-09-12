export class Student {
    Name: string;
    StudentId: number;

    constructor(name?: string, uid?: number){
        if (name)
            this.Name = name;
        else
            this.Name = "David";
        if (uid)
            this.StudentId = uid;
        else
            this.StudentId = 123;
    }

    Serialize() {
        return {name: this.Name, StudentId: this.StudentId};
    }
}