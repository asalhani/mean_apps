import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TaskService } from 'src/app/services/task.service';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AppRoutingModule } from 'src/app/app-routing';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
