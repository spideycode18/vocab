import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.object('/wEquw4yujIZuU47sWNgG5NKseG33/categories').valueChanges().pipe(
      map(data => Object.keys(data).map(key => ({uid: key, ...data[key]})))
    );
  }

  add(category: any) {
    return this.db.list('/wEquw4yujIZuU47sWNgG5NKseG33/categories').push(category);
  }
}
