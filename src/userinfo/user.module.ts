import { NgModule } from '@angular/core' ;
import { userComponent } from './user.component';
import { adminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './user.pipe';
import { FormsModule } from '@angular/forms';
import { userService } from './user.service';


@NgModule ({

imports : [
    BrowserModule,
     FormsModule

],
declarations:[
    userComponent,
    adminComponent,
    FilterPipe
],
bootstrap:[
    userComponent
],
providers :[
    userService
]

})

export class userModule{


}
