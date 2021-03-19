import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { FooterComponent } from './footer/footer.component';
import { GamesListComponent } from './games-list/games-list.component';
import { MainComponent } from './main/main.component';
import { RoutingModule } from './routing.module';
import { SearchComponent } from './search/search.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CategoriesListComponent,
    GamesListComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseApiInfo),
    AngularFirestoreModule,
    RoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
