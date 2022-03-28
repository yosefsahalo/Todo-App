import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todoList.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

  @Input() todo: Array<ITodo> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  public onClickTodo(todo:ITodo, index: number){
    this.todoService.setSingleTodo(todo);
    this.todo.forEach(todo => {
      if (todo.selected) {
        todo.selected = false;
      }
    });
    this.todo[index].selected = true;
  }
}
