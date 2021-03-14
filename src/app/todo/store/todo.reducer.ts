import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo';
import * as TodoActions from './todo.actions';

export const todoFeatureKey = 'todo';

export interface TodoState extends EntityState<Todo> {
  isTodoListOpen: boolean;
}

export const todoEntityAdapter = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
});

export const initialState = todoEntityAdapter.getInitialState({
  isTodoListOpen: false,
});

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => state),
  on(TodoActions.loadTodosSuccess, (state, action) =>
    todoEntityAdapter.setAll(action.data, state)
  ),
  on(TodoActions.loadTodosFailure, (state, _) => state),
  on(TodoActions.toggleTodoList, (state, _) => ({
    ...state,
    isTodoListOpen: !state.isTodoListOpen,
  })),
  on(TodoActions.updateTodo, (state, action) =>
    todoEntityAdapter.updateOne(
      {
        id: action.id,
        changes: {
          ...action.data,
        },
      },
      state
    )
  ),
  on(TodoActions.addNewTodo, (state, _) => {
    const todo: Todo = {
      id: uuidv4(),
      done: false,
      title: '',
      description: '',
    };
    return todoEntityAdapter.addOne(todo, state);
  })
);
