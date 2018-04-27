import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {
  searchUser: BehaviorSubject<string> = new BehaviorSubject(undefined);

  constructor() { }

}
