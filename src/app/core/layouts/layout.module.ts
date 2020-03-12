import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Header } from './header/header.component';
import { ComponentModule } from 'src/app/modules/components/component.module';

@NgModule({
  declarations: [
    Header
  ],
  imports: [
    BrowserModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
