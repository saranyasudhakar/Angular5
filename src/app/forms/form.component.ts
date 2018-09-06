import { Component } from '@angular/core';
import {Employee } from '../models/employee.model';
import {NgForm} from '@angular/forms';
import { FormPostService } from '../services/form.service';

@Component({
     templateUrl:'./form.component.html'
})

export class FormComponent{
    languages=['AngularJs','ReactJs','NodeJs'];
    model = new Employee('John','Methew','abc@aa.com','abcde',true,'Male','AngularJs');
    hasCodelangError= false;
    disableSubmit = false;
    constructor(private _formPostService: FormPostService){}
    fisrtToUpper(value: string): void{

        if(value.length>0){
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);

        }
        else{
            this.model.firstName = value;
        }
    }
    validateCodeLang(event): void{
        if(this.model.codelang==='default'){
            this.hasCodelangError= true;
            this.disableSubmit= true;
        }
        else{
            this.hasCodelangError= false;
            this.disableSubmit= false;
        }
    }

    submitForm(form:NgForm){
       /* console.log(form.value);*/
       this._formPostService.postEmployee(form.value)
           .subscribe(data => console.log('success',data));
    }
    
}