import { Component,OnInit } from '@angular/core';
import { MovieService } from './movies.service';
import { Imovie } from './movies.model';


@Component({
   selector: 'movie-comp',
    templateUrl: `./movies.component.html` ,
     styleUrls : ['./movies.component.css']

})

export class MovieComponent implements OnInit {
    title: string ='@@@Movies List@@@';
     showtable: Boolean = true;
     showImage: Boolean = false;
     filterText: String;
     imageWidth: number= 150;
    movies: any[];

    constructor(private _movieService: MovieService) {}
        

toggleImage(): void {

    this.showImage  = !this.showImage;
}
//Angular5 Obsevarble
ngOnInit(): void{
    /*this.movies = this._movieService.getProducts();*/
    this._movieService.getProducts()
        .subscribe((data) => this.movies = data);
}

//promise
/* ngOnInit(): void{
    /*this.movies = this._movieService.getProducts();*/
  /*  this._movieService.getProducts()
        .then((data) => this.movies = data); 
} */

OnDataRecive(message:string) {
 
this.title = '@@@Movies List@@@>>>>>>' + message;
}
}