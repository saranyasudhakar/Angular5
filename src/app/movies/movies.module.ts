import {NgModule} from '@angular/core';
import { MovieComponent } from './movies.component';
import { myUpperPipe } from './moviesupper.pipe';
import { FilterPipe } from './movies.pipe';
import { moviedetailComponent } from './movie-detail.component';
import { MovieService } from './movies.service';
import { RouterModule}  from '@angular/router';
import { SharedModule } from '../shared/star.module';


@NgModule({
imports:[
    SharedModule,
    
    RouterModule.forChild([
        {path: 'movies', component: MovieComponent},
        {path: 'movies/:id', component:moviedetailComponent},
    ])

],
declarations:[
    MovieComponent,
    myUpperPipe,
    FilterPipe,
    moviedetailComponent,
],
providers: [
    MovieService
]
})

export class MovieModule{

}