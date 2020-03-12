import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Task } from './task/task.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Task,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[
      Task
  ],
  providers: [],
  bootstrap: [Task]
})
export class ComponentModule { }
