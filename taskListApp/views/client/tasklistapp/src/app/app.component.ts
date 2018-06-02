import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskModel } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this._taskService.getTasks().subscribe(result =>{
      this.tasks = result;
      console.log(this.tasks);
    }, err=>{
      console.error(err);
    })
  }
  constructor(private _taskService: TaskService){  }
  tasks: TaskModel[];
  title = 'app';

}
