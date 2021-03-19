import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/internal/operators/map';
import { LocalizationService } from '../localization/localization.service';

@Injectable({
  providedIn: 'root',
})
export class CatergoriesService {
  constructor(
    private db: AngularFireDatabase,
    private localService: LocalizationService
  ) {}

  getCategories() {
    return this.db
      .object('categories')
      .valueChanges()
      .pipe(
        map((categories: any) =>
          categories.map((category) => ({
            ...category,
            title:
              this.localService.language === 'ru'
                ? category.title_ru
                : category.title_en,
          }))
        )
      );
  }
}
