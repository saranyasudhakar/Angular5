import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'myUpper'
})
export class myUpperPipe implements PipeTransform{

    transform(value : string, type: string): string {
        if(type == 'upper'){
        value = value.toUpperCase();
        }
        else{
            value = value.toLowerCase();
        }
        return value;
        


    }


}