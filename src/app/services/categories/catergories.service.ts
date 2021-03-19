import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CatergoriesService {

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.object('categories').valueChanges()
  }
}
