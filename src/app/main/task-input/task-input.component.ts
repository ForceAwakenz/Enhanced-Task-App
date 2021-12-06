import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { TaskDataService } from 'src/app/shared/services/task-data.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {
  isAddTaskClicked: boolean = false;
  addTaskForm!: FormGroup;
  @ViewChild('taskInput') taskInput!: ElementRef;

  constructor(private taskDataService: TaskDataService) {}

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskTextInput: new FormControl(null),

    });
  }

  onSubmit() {
    this.taskDataService.addTask(
      {
        text: this.addTaskForm.controls['taskTextInput'].value, 
        date: new Date().toDateString(), 
        isDone: false, 
        id: +(new Date())}
      );

    this.taskInput.nativeElement.value = '';
      
  }

}
