import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';


import { UndefinedTasksComponent } from './undefined-tasks.component';

@NgModule({
  declarations: [
    UndefinedTasksComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  exports: [
    UndefinedTasksComponent
  ],
  providers: [],
  bootstrap: []
})
export class UndefinedTasksModule { }
