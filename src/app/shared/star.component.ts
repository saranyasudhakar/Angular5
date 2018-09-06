import { Component, OnChanges, Input,Output, EventEmitter } from '@angular/core';

@Component({

    selector: 'movie-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
   @Input() rating: number;
    starwidth:number;
    @Output() ratingclicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges (): void{
        this.starwidth = this.rating * 86/5
    }
    onStar(): void{

        this.ratingclicked.emit(`The rating clicked is ${this.rating}`);
    }
}