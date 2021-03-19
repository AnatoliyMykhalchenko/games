import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Game } from 'src/app/games-list/games-list.types';

@Injectable({
  providedIn: 'root',
})
export class GamesService {

  constructor(private db: AngularFireDatabase) {}

  getGames(): Observable<Game[]> {
    return this.db.object('games').valueChanges() as Observable<Game[]>;
  }
}
