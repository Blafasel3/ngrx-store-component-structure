import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Todo } from '../../store/todo';
import { TodoFacade } from '../../store/todo.facade';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input()
  todo!: Todo;

  todoFormGroup!: FormGroup;
  titleControl!: FormControl;
  descriptionControl!: FormControl;
  doneControl!: FormControl;

  private readonly subscriptions: Subscription = new Subscription();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly todoFacade: TodoFacade
  ) {}

  ngOnInit(): void {
    this.titleControl = this.formBuilder.control(this.todo.title);
    this.descriptionControl = this.formBuilder.control(this.todo.description);
    this.doneControl = this.formBuilder.control(this.todo.done === true);
    this.todoFormGroup = this.formBuilder.group({
      title: this.titleControl,
      description: this.descriptionControl,
      done: this.doneControl,
    });
    this.subscriptions.add(this.subscribeToTitleChanges());
    this.subscriptions.add(this.subscribeToDescriptionChanges());
    this.subscriptions.add(this.subscribeToDoneChange());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private subscribeToTitleChanges() {
    return this.titleControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) =>
        this.todoFacade.updateTodo(this.todo.id, { title: value })
      );
  }

  private subscribeToDescriptionChanges() {
    return this.descriptionControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) =>
        this.todoFacade.updateTodo(this.todo.id, { description: value })
      );
  }

  private subscribeToDoneChange() {
    return this.doneControl.valueChanges.subscribe((value: boolean) =>
      this.todoFacade.updateTodo(this.todo.id, { done: value })
    );
  }
}
