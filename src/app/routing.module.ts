import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { redirect } from './utils/redirect';

const routes = [
  { path: '', pathMatch: 'full', redirectTo: redirect() },
  { path: 'ru', component: MainComponent },
  { path: 'en', component: MainComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class RoutingModule {}
