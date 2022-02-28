import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todoList.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todos: Array<ITodo> = [];
  
  private subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodo().subscribe(data => {
        console.log(data);
        this.todos = data;
      })
    )
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  public onClickTodo(todo:ITodo, index: number){
    this.todoService.setSingleTodo(todo);
    this.todos[index].selected = true;
  }
}
