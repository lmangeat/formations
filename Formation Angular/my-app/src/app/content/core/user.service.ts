import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class UserService {
  constructor(private Http: HttpClient){}

  userEndpoint: string = 'https://jsonplaceholder.typicode.com/users';

  get(){
    return this.Http
        .get(this.userEndpoint)
        .toPromise();

  }

  getById(id:number) {
    return this.Http
              .get(`${this.userEndpoint}/${id}`)
              .toPromise();
  }

  getByEmail(email: string) {
    return this.Http
            .get(this.userEndpoint)
            .map((users: any) => {
              return users.filter(user => user.email == email)[0];
            })
            .toPromise();
  }

  create(user:Object){
    return this.Http
            .post(this.userEndpoint, user)
            .toPromise();
  }

  modify(user: any) {
    return this.Http
            .put(`${this.userEndpoint}/${user.id}`, user)
            .toPromise();
  }

  delete(userId: number) {
    return this.Http
                .delete(`${this.userEndpoint}/${userId}`)
                .toPromise();
  }
}
