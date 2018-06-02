import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task';

@Injectable()
export class TaskService {

  constructor(private _http: HttpClient) { }

  getTasks():Observable<TaskModel[]>{
    return this._http.get<TaskModel[]>("http://localhost:3000/api/tasks")
  }
}
