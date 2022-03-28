import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todoList.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  constructor() { }

  @Input() set todos(todos:ITodo){
    this._todo = todos;
  }

  get todos(){
    return this._todo;
  }

  private _todo: ITodo;

  ngOnInit(): void {}

  public ocClickCompleted(todo:ITodo):void{
    todo.isCompleted = true;
  }

  public onClickArchived():void{
    this.todos.isArchived = true; 
  }
}
