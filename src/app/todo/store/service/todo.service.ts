import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Todo } from '../todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  getTodoList(): Observable<Todo[]> {
    return of([
      {
        id: uuidv4(),
        done: true,
        title: 'Einkaufen gehen',
        description: 'Bananen, Milch',
      },
      {
        id: uuidv4(),
        done: false,
        title: 'Steuererklärung machen',
        description: 'Echt keine Lust drauf...',
      },
      {
        id: uuidv4(),
        done: false,
        title: 'Pixel schubsen',
        description: 'Styling in Todo Container anpassen',
      },
    ]).pipe(delay(1));
  }
}
