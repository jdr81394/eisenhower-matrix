import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Task } from '../../classes/task/task';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http: HttpClient) {
    
   }

  getUndefinedTasks(): Observable<Task[]> {
    const params = new HttpParams()
    .set('action', 'getUndefinedTasks');

    return this.http.get<Task[]>('www.localhost:3000', {params: params});
  }

}
