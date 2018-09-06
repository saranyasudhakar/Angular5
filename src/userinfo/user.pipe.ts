import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from './user.model';

@Pipe({

name: 'filterData'
})

export class FilterPipe implements PipeTransform{

    transform( value: Iuser[],filterBy: string): Iuser[]{
        filterBy= filterBy?filterBy.toLowerCase(): null;
        return filterBy? value.filter((user: Iuser) =>
        user.UserName.toLowerCase().indexOf(filterBy)!==-1) : value;
    }
}