import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todoList.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    {
      id: 1,
      title: 'Dolphin, striped',
      description: 'Stenella coeruleoalba',
      isCompleted: false,
      isArchived: false,
      endData: '12/20/2021',
      selected: true
    },
    {
      id: 2,
      title: 'Sheathbill, snowy',
      description: 'Chionis alba',
      isCompleted: false,
      isArchived: false,
      endData: '10/30/2021',
      selected: false
    },
    {
      id: 3,
      title: 'Jaeger, long-tailed',
      description: 'Stercorarius longicausus',
      isCompleted: false,
      isArchived: false,
      endData: '8/11/2021',
      selected: false
    },
    {
      id: 4,
      title: 'Lesser masked weaver',
      description: 'Ploceus intermedius',
      isCompleted: false,
      isArchived: false,
      endData: '10/21/2021',
      selected: false
    },
    {
      id: 5,
      title: 'Wallaby, tammar',
      description: 'Macropus eugenii',
      isCompleted: false,
      isArchived: false,
      endData: '9/29/2021',
      selected: false
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodo(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }

  public getSingleTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }
  
  public setSingleTodo(todo: ITodo){
    return this._singleTodoSubject.next(todo);
  }
}
