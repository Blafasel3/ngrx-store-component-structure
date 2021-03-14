import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoService } from './service/todo.service';
import { TodoEffects } from './todo.effects';
import { TodoFacade } from './todo.facade';
import { reducer, todoFeatureKey } from './todo.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(todoFeatureKey, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [TodoService, TodoFacade],
})
export class TodoStoreModule {}
