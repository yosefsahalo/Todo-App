import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todoList.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

  constructor(private todoService: TodoService) { }

  @Input() set todos(todos:ITodo){
    this._todo = todos;
  }

  get todos(){
    return this._todo;
  }

  private _todo: ITodo;

  ngOnInit(): void {}

  public onClickCompleted(todo:ITodo):void{
    this.todos.isCompleted = true;
    this.todoService.onTodoActions(todo.id, 'isCompleted');
  }
  
  public onUnClickCompleted(todo:ITodo):void{
    this.todos.isCompleted = false;
    this.todoService.onTodoActions(todo.id, 'isCompleted');
  }

  public onClickArchived():void{
    this.todos.isArchived = true;
    this.todoService.onTodoActions(this.todos.id, 'isArchived');
  }
}
