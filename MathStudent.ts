import * as s from './Student';

export class MathStudent extends s.Student {
    constructor(name?: string, studentId?: number){
        super(name, studentId);
    }
    Serialize(){
        return super.Serialize();
    }
}