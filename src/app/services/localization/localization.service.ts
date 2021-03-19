import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { en } from './en';
import { Lang, Language } from './localization.types';
import { ru } from './ru';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  public language: Lang = this.router.url.includes('ru') ? 'ru' : 'en';

  constructor(private router: Router) {}

  getLanguageData(): Language {
    return this.language === 'ru' ? ru : en;
  }
}
