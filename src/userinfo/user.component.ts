import { Component } from '@angular/core' ;

@Component({
 
    selector : 'user-comp',
    template : `<div>
                 <h1 style="color:red">Shared data from Admin component</h1>
                 <admin-comp></admin-comp>
                 </div>`
                    

})

export class userComponent {

    
}