import { createHostListener } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { CatergoriesService } from '../services/categories/catergories.service';
import { LocalizationService } from '../services/localization/localization.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  categories$ = this.categoriesService.getCategories();
  names = {
    chooseCategory: this.localService.getLanguageData().chooseCategory,
    reset: this.localService.getLanguageData().reset
  };
  @Output() changeCategoryId = new EventEmitter();
  @Output() resetCategory = new EventEmitter();

  constructor(
    private categoriesService: CatergoriesService,
    private localService: LocalizationService
  ) {}

  ngOnInit(): void {}
}
