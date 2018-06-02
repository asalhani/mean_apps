import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TaskModel } from 'src/app/models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html'
})
export class TasksListComponent implements OnInit {
  constructor(private _taskService: TaskService){  }
  
  tasks: TaskModel[];
  
  ngOnInit(): void {
    this._taskService.getTasks().subscribe(result =>{
      this.tasks = result;
      console.log(this.tasks);
    }, err=>{
      console.error(err);
    })
  }

}
