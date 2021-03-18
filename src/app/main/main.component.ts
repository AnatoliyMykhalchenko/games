import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games.service';
import { filter, map } from 'rxjs/operators';
import { from } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  games$ = this.gamesService.getGames();

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {}

  changeCategory(id) {
    this.games$ = this.gamesService.getGames().pipe(map(games => games.filter(game => game.category_id === id)));
  }

  resetCategory() {
    this.games$ = this.gamesService.getGames();
  }

}
