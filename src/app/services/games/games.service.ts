import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {

  constructor(private db: AngularFireDatabase) {}

  getGames(): Observable<any[]> {
    return this.db.object('games').valueChanges() as Observable<any[]>;
  }
}
