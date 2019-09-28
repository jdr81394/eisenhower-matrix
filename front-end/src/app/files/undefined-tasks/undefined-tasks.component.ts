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

  // todo: Task[];
  todo: any[];
  done: any[];
  constructor(private taskService: TaskService) { 
    // this.todo = [
    //   'Get to work',
    //   'Pick up groceries',
    //   'Go home',
    //   'Fall asleep'
    // ];
  
    this.done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
  }

  ngOnInit() {
    this.taskService.getUndefinedTasks().subscribe( (res: Task[]) => this.todo = res );
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
