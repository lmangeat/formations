import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private Http: HttpClient){}

  userEndpoint: string = 'https://jsonplaceholder.typicode.com/users';

  get(){
    return this.Http
        .get(this.userEndpoint)
        .toPromise();

  }

  create(user:Object){
    return this.Http
            .post(this.userEndpoint, user)
            .toPromise();
  }

  delete(userId: number) {
    return this.Http
                .delete(`${this.userEndpoint}/${userId}`)
                .toPromise();
  }
}
