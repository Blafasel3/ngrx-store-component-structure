import { Component, OnInit } from '@angular/core';
import { TodoFacade } from './todo/store/todo.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-store-component-structure';

  constructor(private readonly todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.todoFacade.loadTodos();
  }

  onToggleTodoListClicked(): void {
    this.todoFacade.toggleTodoList();
  }
}
