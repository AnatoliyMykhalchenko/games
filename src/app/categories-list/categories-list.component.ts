import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CatergoriesService } from '../services/categories/catergories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories$ = this.categoriesService.getCategories()
  @Output() changeCategoryId = new EventEmitter();
  @Output() resetCategory = new EventEmitter();

  constructor(private categoriesService: CatergoriesService) { }

  ngOnInit(): void {
    this.categories$.subscribe(console.log)
  }

}
