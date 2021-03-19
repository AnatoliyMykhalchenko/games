import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../games-list/games-list.types';
import { GamesService } from '../services/games/games.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  games$: Observable<Game[]> = this.gamesService.getGames();
  categoryId: number = null;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {}

  changeCategory(id) {
    this.categoryId = id;
    this.games$ = this.gamesService
      .getGames()
      .pipe(map((games) => games.filter((game) => game.category_id === id)));
  }

  resetCategory() {
    this.categoryId = null;
    this.games$ = this.gamesService.getGames();
  }
}
