import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable()
export class FormPostService{
  constructor(private _http:Http){}

    /*  postEmployee(employee: Employee){
          console.log('posting in service',employee);
      
  }*/
    private extractData(res:Response){
        const body= res.json();
        return body.fields|| {};

    }
  postEmployee(employee: Employee):Observable<any[]>{
      const body = JSON.stringify(employee);
      const headers = new Headers({'Content-Type':'apllication/json'});
      const options= new RequestOptions({headers: headers});
      return this._http.post('http://localhost:3100/postEmployee',body,options)
                  .pipe(map(this.extractData));
  }
}