import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalizationService } from '../services/localization/localization.service';
import { Language } from '../services/localization/localization.types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() typeInputValue = new EventEmitter();
  placeholder: string = this.localService.getLanguageData().gamesSearch;

  constructor(private localService: LocalizationService) {}

  ngOnInit(): void {}
}
