import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todoList.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos:ITodo[] = []

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null);

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

  public addNewTodo(newTodo: ITodo): void {
    const exitingTodo:Array<ITodo> = this._todoSubject.value;
    exitingTodo.push(newTodo);
    this._todoSubject.next(exitingTodo);
  }
}
