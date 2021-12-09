import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { TaskDataService } from '../../shared/services/task-data.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {
  isAddTaskClicked: boolean = false;
  addTaskForm!: FormGroup;

  constructor(private taskDataService: TaskDataService) {}

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskTextInput: new FormControl(null),
      taskDatePicker: new FormControl(null)
    });
  }

  onSubmit(): void {
    if (this.addTaskForm.controls['taskTextInput'].value.trim() === '') {
      return;
    }
    this.taskDataService.addTask(
      {
        text: this.addTaskForm.controls['taskTextInput'].value, 
        date: this.addTaskForm.controls['taskDatePicker'].value?.toDateString() || new Date().toDateString(),
        isDone: false, 
        id: +(new Date())}
      );

    this.addTaskForm.controls['taskTextInput'].reset();
    this.addTaskForm.controls['taskDatePicker'].reset();
  }

  onAddTaskBtnClicked() {
    this.isAddTaskClicked = true;
  }

}
