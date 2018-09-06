import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from './movies.model';

@Pipe({

name: 'filterData'
})

export class FilterPipe implements PipeTransform{

    transform( value: Imovie[],filterBy: string): Imovie[]{
        filterBy= filterBy?filterBy.toLowerCase(): null;
        return filterBy? value.filter((movie: Imovie) =>
        movie.type.toLowerCase().indexOf(filterBy)!==-1) : value;
    }
}