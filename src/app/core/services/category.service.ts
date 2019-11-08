import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private uid: string;

  constructor(private db: AngularFireDatabase,
              private authService: AuthService) {
                authService.user$.subscribe(user => this.uid = user ? user.uid : '');
  }

  getAll() {
    return this.uid ? this.db.object(`/${this.uid}/categories`).valueChanges().pipe(
      map(data => Object.keys(data).map(key => ({uid: key, ...data[key]})))
    ) : of(null);
  }

  add(category: any) {
    return this.db.list(`/${this.uid}/categories`).push(category);
  }
}
