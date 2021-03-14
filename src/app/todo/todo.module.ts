import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoService } from './store/service/todo.service';
import { TodoStoreModule } from './store/todo-store.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoListContainerComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [ReactiveFormsModule, CommonModule, TodoStoreModule, FormsModule],
  exports: [TodoListContainerComponent],
})
export class TodoModule {}
