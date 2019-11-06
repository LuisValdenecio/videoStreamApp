import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralNavbarComponent } from './general-navbar-compo/general-navbar.component';

@NgModule({
  declarations: [GeneralNavbarComponent],
  imports: [
    CommonModule
  ],
  exports : [
    GeneralNavbarComponent
  ]
})
export class CommonGUIModule { }
