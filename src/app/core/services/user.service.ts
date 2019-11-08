import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private db: AngularFireDatabase) { }

  isExist(uid: string) {
    return this.db.object(`/${uid}`).valueChanges().pipe(
      map((user: firebase.User) => user ? {name: user.displayName, uid: user.uid} : null)
    );
  }

  createRecord(uid: string) {
    this.db.object(`/${uid}`).set({categories: 'empty', words: 'empty'});
  }
}
