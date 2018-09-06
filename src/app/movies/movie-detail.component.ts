import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieService } from './movies.service';
import { Imovie } from './movies.model';

@Component({
 templateUrl:'./movie-detail.component.html'
})

export class moviedetailComponent{
    imageWidth: number= 150;
    id: number;
    name: string;
    type: string;
    img : string;
    detail: Imovie[];
    constructor(private _route:ActivatedRoute,
                 private _router:Router,
                private _movieService: MovieService){

    }
    ngOnInit():void{
        this.id= this._route.snapshot.params['id'];
        this._route
        .queryParams
        .subscribe((params)=>{
            this.name=params['name'];
            this.type=params['type'];
            this.img=params['img'];
        });
       /* this._movieService.getMovieDetails(this.name)
             .subscribe((data)=> this.detail= data);*/
    }
    onBack(): void{
        this._router.navigate(['/movies']);
    }
}
