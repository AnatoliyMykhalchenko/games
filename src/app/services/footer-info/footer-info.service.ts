import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterInfoService {
  navLinks = [
    {
      title: 'Общая информация',
      links: [
        { title: 'О нас' },
        { title: 'Правила' },
        { title: 'Отделения' },
        { title: 'Контакты' },
      ],
    },
    {
      title: 'Лучшие предложения',
      links: [
        { title: 'Игры' },
        { title: 'Результаты' },
        { title: 'Статистика' },
      ],
    },
    {
      title: 'Безопасность и конфиденциальность',
      links: [
        { title: 'Условия' },
        { title: 'Безопасность' },
        { title: 'Конфиденциальность' },
      ],
    },
  ];

  footerText =
    'Когда удача на вашей стороне, сейчас не время быть скромным или робким. Настало время достичь самого большого успеха, которого вы можете достичь';

  constructor() {}
}
