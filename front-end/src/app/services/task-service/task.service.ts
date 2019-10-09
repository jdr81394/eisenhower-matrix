import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Task } from '../../classes/task/task';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http: HttpClient) {
    
   }

  getUndefinedTasks() {
    const params = new HttpParams()
    .set('action', 'getUndefinedTasks');

    return this.http.get<Task[]>('http://www.localhost:3000/main/tasks', {params: params});
  }

  getToDoTasks() {
    const params = new HttpParams()
    .set('action', 'getToDoTasks');

    return this.http.get<Task[]>('http://www.localhost:3000/main/tasks', {params: params});
  }

}
