import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class RoutingModule { }
