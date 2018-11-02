// import * as s from './Student';
import {Student} from './Student';

export class MathStudent extends Student {
    constructor(name?: string, studentId?: number){
        super(name, studentId);
    }
    Serialize(){
        return super.Serialize();
    }
}

