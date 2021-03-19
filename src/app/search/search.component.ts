import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() typeInputValue = new EventEmitter();
  placeholder = this.localService.getLanguageData().gamesSearch;

  constructor(private localService: LocalizationService) {}

  ngOnInit(): void {}
}
