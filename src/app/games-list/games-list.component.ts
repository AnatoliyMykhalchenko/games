import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../services/games/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input() games$ = this.gamesService.getGames();

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

}
