import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todoList.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onNgSubmit(): void {
    if(this.form.valid){
      const formValues = this.form.form.value;
      const newTodo:ITodo = {
        id: uuidv4(),
        title: formValues.title,
        description: formValues.description,
        isCompleted: false,
        isArchived: false,
        endData: formValues.endData,
        selected: false
      }
      console.log("ON Submit");
      console.log(newTodo);
      this.todoService.addNewTodo(newTodo);
      this.dialog.closeAll();
    }
  }
}
