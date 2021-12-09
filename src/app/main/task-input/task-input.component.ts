import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormatTaskService } from 'src/app/shared/services/format-task.service';
import { TaskDataService } from '../../shared/services/task-data.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {
  isAddTaskClicked: boolean = false;
  addTaskForm!: FormGroup;

  constructor(
    private taskDataService: TaskDataService,
    private formatTaskService: FormatTaskService) {}

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskTextInput: new FormControl(null, Validators.required),
      taskDatePicker: new FormControl(null)
    });
  }

  onSubmit(): void {
    this.formatTaskService.checkedTask = 
      {
        text: this.addTaskForm.controls['taskTextInput'].value, 
        date: this.addTaskForm.controls['taskDatePicker'].value?.toDateString()
      };
    
    this.taskDataService.addTask(this.formatTaskService.checkedTask);

    this.addTaskForm.controls['taskTextInput'].reset();
    this.addTaskForm.controls['taskDatePicker'].reset();
  }

  onAddTaskBtnClicked() {
    this.isAddTaskClicked = true;
  }

}
