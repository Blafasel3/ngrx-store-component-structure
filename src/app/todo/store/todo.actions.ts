import { createAction, props } from '@ngrx/store';
import { Todo } from './todo';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ data: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

export const toggleTodoList = createAction('[Todo] Toggle Todo List');

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ id: string; data: Partial<Todo> }>()
);

export const addNewTodo = createAction('[Todo] Create new Todo');
