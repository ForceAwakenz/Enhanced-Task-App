import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
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
  @ViewChild('taskForm') taskForm!: FormGroupDirective;

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
    this.taskForm.resetForm();
  }

  onAddTaskBtnClicked() {
    this.isAddTaskClicked = true;
  }

}
