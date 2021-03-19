import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { en } from './en';
import { ru } from './ru';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  public language = this.router.url.includes('ru') ? 'ru' : 'en';

  constructor(private router: Router) {
  }

  getLanguageData() {
    return this.language === 'ru' ? ru : en;
  }
}
