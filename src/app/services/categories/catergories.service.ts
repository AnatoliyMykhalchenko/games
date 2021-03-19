import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Category } from 'src/app/categories-list/categories-list.types';
import { LocalizationService } from '../localization/localization.service';

@Injectable({
  providedIn: 'root',
})
export class CatergoriesService {
  constructor(
    private db: AngularFireDatabase,
    private localService: LocalizationService
  ) {}

  getCategories(): Observable<Category[]> {
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
      ) as Observable<Category[]>;
  }
}
