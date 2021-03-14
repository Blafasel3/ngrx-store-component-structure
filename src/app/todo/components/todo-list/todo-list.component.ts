import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../store/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input()
  todos: Todo[] | null = [];

  @Output()
  addTodoClicked: EventEmitter<void> = new EventEmitter();

  onAddTodoClicked(): void {
    this.addTodoClicked.emit();
  }

  todoTrackBy(_: number, item: Todo): string {
    return item.id;
  }
}
