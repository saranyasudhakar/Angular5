import { Component, OnInit } from '@angular/core' ;
import { userService } from './user.service';
import { Iuser } from './user.model';

@Component({
 
    selector : 'admin-comp',
    templateUrl : './admin.component.html'
              

})

export class adminComponent implements OnInit {
    filterText: String;
    userInfo : any[];
    constructor(private _userService: userService) {}
    ngOnInit(): void{

      this.userInfo = this._userService.getUsers();
    }

} 
