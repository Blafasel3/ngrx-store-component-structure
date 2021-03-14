import { Injectable } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Todo } from './todo';
import * as TodoActions from './todo.actions';
import { todoSelectors } from './todo.selectors';

@Injectable()
export class TodoFacade {
  readonly fetchTodos$ = this.store.select(todoSelectors.selectAll);

  readonly selectDialogOpen$ = this.store.select(
    todoSelectors.selectDialogOpen
  );

  constructor(private readonly store: Store<EntityState<Todo>>) {}

  loadTodos(): void {
    this.store.dispatch(TodoActions.loadTodos());
  }

  toggleTodoList(): void {
    this.store.dispatch(TodoActions.toggleTodoList());
  }

  updateTodo(id: string, data: Partial<Todo>): void {
    this.store.dispatch(TodoActions.updateTodo({ id, data }));
  }

  addTodo(): void {
    this.store.dispatch(TodoActions.addNewTodo());
  }
}
