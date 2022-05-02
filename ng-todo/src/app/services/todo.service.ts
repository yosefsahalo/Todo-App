import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, single } from 'rxjs';
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
    if(!this._todoSubject.value.length){
      const todoString = localStorage.getItem('todos');
      if(todoString){
        const existingTodo:Array<ITodo> = JSON.parse(todoString);
        this._todoSubject.next(existingTodo);
        this._singleTodoSubject.next(existingTodo[0]);
      }
    }
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
    localStorage.setItem('todos', JSON.stringify(exitingTodo));
  }

  public onTodoActions(todoId:string, action:string):void{
    const exitingTodo:Array<ITodo> = this._todoSubject.value;

    const todoIndex = exitingTodo.findIndex(
      (singleTodo) => singleTodo.id = todoId
    );
    exitingTodo[todoIndex][action] = true;
    this._todoSubject.next(exitingTodo);
    localStorage.setItem('todos', JSON.stringify(exitingTodo));
  }
}
