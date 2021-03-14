import { Component } from '@angular/core';
import { Todo } from '../../store/todo';
import { TodoFacade } from '../../store/todo.facade';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss'],
})
export class TodoListContainerComponent {
  constructor(public readonly todoFacade: TodoFacade) {}

  onAddTodoClicked(): void {
    this.todoFacade.addTodo();
  }
}
