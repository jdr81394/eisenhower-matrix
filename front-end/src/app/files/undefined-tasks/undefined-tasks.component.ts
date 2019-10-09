import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/** CLASSES */
import { Task } from '../../classes/task/task';

/** SERVICES */
import { TaskService } from '../../services/task-service/task.service';

@Component({
  selector: 'app-undefined-tasks',
  templateUrl: './undefined-tasks.component.html',
  styleUrls: ['./undefined-tasks.component.scss']
})
export class UndefinedTasksComponent implements OnInit {

  undefinedTasks: Task[];
  toDoTasks: Task[];
  toDecideTasks: Task[];
  toDelegateTasks: Task[];
  toDeleteTasks: Task[];
  constructor(private taskService: TaskService) { 
    this.undefinedTasks = [];
    this.toDoTasks = [];
    this.toDecideTasks = [];
    this.toDelegateTasks = [];
    this.toDeleteTasks = [];
  }

  ngOnInit() {
    this.taskService.getUndefinedTasks().subscribe( (res: Task[]) => this.undefinedTasks = res);
    this.taskService.getToDoTasks().subscribe((res) => console.log('res: ' ,res));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


}
