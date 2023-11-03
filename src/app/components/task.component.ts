import { Task } from './../models/task.model';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RandomIdService } from './random-id.service';

@Component({
  selector: 'app-task',
  template: `
    <div class="list-item {{ task?.state }}">
      <label
        [attr.aria-label]="'archiveTask-' + task?.id"
        for="checked-{{ task?.id }}-{{idStr}}"
        class="checkbox"
      >
        <input
          type="checkbox"
          disabled="true"
          [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
          name="checked-{{ task?.id }}"
          id="checked-{{ task?.id }}-{{idStr}}"
        />
        <span class="checkbox-custom" (click)="onArchive(task?.id)"></span>
      </label>
      <label
        [attr.aria-label]="task?.title + ''"
        for="title-{{ task?.id }}-{{idStr}}"
        class="title"
      >
        <input
          type="text"
          [value]="task?.title"
          readonly="true"
          id="title-{{ task?.id }}-{{idStr}}"
          name="title-{{ task?.id }}"
          placeholder="Input title"
          style="backgroundColor:red;"
        />
      </label>

      <button
        *ngIf="task?.state !== 'TASK_ARCHIVED'"
        class="pin-button"
        [attr.aria-label]="'pinTask-' + task?.id"
        (click)="onPin(task?.id)"
      >
        <span class="icon-star"></span>
      </button>
    </div>
  `,
})
export default class TaskComponent {
  idStr: string;
  constructor(idGenerator: RandomIdService) {
    this.idStr = idGenerator.getId();
  }
  /**
   * The shape of the task object
   */
  @Input() task?: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();
  // tslint:disable-next-line: no-output-on-prefix

  @Output()
  onArchiveTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix

  // @Output()
  // onArchiveTask = new EventEmitter<Event>();

  /**
   * @ignore
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.onPinTask.emit(id);
    console.log('pined', id);
  }
  /**
   * @ignore
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    console.log('archived', id, this.onArchiveTask);
    // this.onPinTask.emit(id);
    this.onArchiveTask.emit(id);
  }
}
