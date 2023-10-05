import { CreateTodoComponent } from './../../dialogs/create-todo/create-todo.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasksArray = [{
    taskName: 'DB Assignment',
    assignedDate: 12-2-2013,
    dueDate: 11-2-3323,
    description: 'Hello'
  }]

  // tasksArray = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      
        height: '80%',
        width: '100%',
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
