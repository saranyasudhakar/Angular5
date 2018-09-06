import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms' ;
import { HttpModule } from '@angular/http';
import 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { NotFoundComponent } from './shared/notfound.component';

import { homeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MovieModule } from './movies /movies.module';
import { MusicComponent } from './music/music.component';
import { MusicService } from './music/music.service';
import { FormComponent } from './forms/form.component';
import {  FormPostService } from './services/form.service';
import { CustomerComponent } from './reactiveforms/reactive.component';

@NgModule({

imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([   
          {path: 'music', component:MusicComponent},
          {path: 'home', component:homeComponent},
          {path: 'forms', component:FormComponent},
          {path: 'reactiveforms', component:CustomerComponent},
          {path: '', redirectTo:'home', pathMatch:'full'},
          {path:'**', component:NotFoundComponent}

    ]),
    MovieModule,
    ReactiveFormsModule
],

declarations: [
    AppComponent,
    MusicComponent,
    homeComponent, 
    NotFoundComponent,
    FormComponent,
    CustomerComponent 
],

bootstrap:[
    AppComponent
],
providers:[
    MusicService,
    FormPostService
] 

})

export class AppModule {

}
