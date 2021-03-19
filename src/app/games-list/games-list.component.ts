import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GamesService } from '../services/games/games.service';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  mostPopular = this.localService.getLanguageData().mostPopular;
  @Input() games$ = this.gamesService.getGames();
  @Input() categoryId;

  constructor(
    private gamesService: GamesService,
    private localService: LocalizationService
  ) {}

  ngOnInit(): void {}

  filterGamesByName(text) {
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
