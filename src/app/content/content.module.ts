import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body/main-body.component';
import { Home1Component } from './home1/home1.component';

@NgModule({
  declarations: [
    MainBodyComponent,
    Home1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainBodyComponent
  ]
})
export class ContentModule { }
