import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from './todo.reducer';

const selectTodoState = createFeatureSelector<fromTodo.TodoState>(
  fromTodo.todoFeatureKey
);

const selectDialogOpen = createSelector(
  selectTodoState,
  (state: fromTodo.TodoState) => state.isTodoListOpen
)

export const todoSelectors =  {
  ...fromTodo.todoEntityAdapter.getSelectors(selectTodoState),
  selectDialogOpen
};
