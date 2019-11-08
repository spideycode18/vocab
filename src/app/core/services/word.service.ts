import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class WordService {
  private uid: string;
  constructor(private db: AngularFireDatabase,
    private authService: AuthService) {
      authService.user$.subscribe(user => this.uid = user ? user.uid : '');
  }

  add(category: any, word: any) {
    return this.db.list(`/${this.uid}/words/${category}`).push(word);
  }

}
