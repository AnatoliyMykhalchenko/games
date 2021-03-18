import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { MainComponent } from './main/main.component';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent, 
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseApiInfo),
    AngularFirestoreModule,
    RoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
