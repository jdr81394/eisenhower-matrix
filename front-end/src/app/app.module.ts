import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UndefinedTasksModule } from './files/undefined-tasks/undefined-tasks.module';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    UndefinedTasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
