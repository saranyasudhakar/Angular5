import { Injectable } from '@angular/core';


@Injectable()

export class userService {
getUsers(): any[]{
    return [ {
                'UserName':' ABC',
                'EmailId': 'abc@gmail.com',
                'PhoneNo': 512222456
              },
              {
                'UserName':' XYZ',
                'EmailId': 'xyz@gmail.com',
                'PhoneNo': 512333456
    
              },
              {
    
                'UserName':' TTG',
                'EmailId': 'ttg@gmail.com',
                'PhoneNo': 512336786
              },
              {
                'UserName':' ABC',
                'EmailId': 'abcd@gmail.com',
                'PhoneNo': 512262498
              }
    
        ];
    

    }
    
}