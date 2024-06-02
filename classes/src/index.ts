import { once } from "helpful-decorators";
class DateClass{
    private timeZone: string;
    constructor(timeZone: string){
        this.timeZone = timeZone;
    }
    @once
    getTime(){
        var d = new Date();
        return d.getTime();
    }
}

const dataObject = new DateClass("IND");
console.log(dataObject.getTime());