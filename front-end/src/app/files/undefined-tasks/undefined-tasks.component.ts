import { Component, OnInit } from '@angular/core';

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

  todo: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getUndefinedTasks().subscribe( (res: Task[]) => this.todo = res );
  }


}
