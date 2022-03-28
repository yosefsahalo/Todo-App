import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddNewTodoComponent } from "../components/add-new-todo/add-new-todo.component";
import { ITodo } from '../models/todoList.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  
  constructor(public dialog: MatDialog, private todoService: TodoService) { }
  
  public todos: ITodo;
  public todo: ITodo[];

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddNewTodoComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSingleTodo().subscribe(data => {
        this.todos = data;
      })
    );
    this.subscription.add(
      this.todoService.getTodo().subscribe(data => {
        this.todo = data;
      })
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
