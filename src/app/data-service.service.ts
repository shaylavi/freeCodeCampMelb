import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

class User {
  constructor(
    public name: string,
    public activity: string,
    public desires?: string
  ) {}
}
const DATA = [];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // usersRef: AngularFireList<any>;
  // users: Observable<any[]>;
  constructor(dbUsers: AngularFireDatabase) {
    // this.usersRef = dbUsers.list('users');
    // this.users = this.usersRef.valueChanges();
    // this.users.subscribe(res => {
    //   res.forEach(user => {
    //     DATA.push(user);
    //   });
    // });
  }
}
