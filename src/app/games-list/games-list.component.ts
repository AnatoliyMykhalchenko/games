import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GamesService } from '../services/games/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  @Input() games$ = this.gamesService.getGames();
  @Input() categoryId;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {}

  filterGamesByName(text) {
    console.log(text);
    this.games$ = this.gamesService.getGames().pipe(
      map((games) =>
        games.filter((game) => {
          if (!this.categoryId) {
            return game.title.toLowerCase().includes(text.toLowerCase());
          } else {
            return (
              game.title.toLowerCase().includes(text.toLowerCase()) &&
              game.category_id === this.categoryId
            );
          }
        })
      )
    );
  }
}
