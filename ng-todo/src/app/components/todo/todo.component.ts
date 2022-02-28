import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todoList.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy{

  constructor(private todoService: TodoService) { }

  public todos: ITodo ;

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSingleTodo().subscribe(data => {
        console.log(data);
        this.todos = data;
      })
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
