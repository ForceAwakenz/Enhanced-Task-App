import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ITask } from 'src/app/shared/models/Task';
import { FormatTaskService } from 'src/app/shared/services/format-task.service';
import { TaskDataService } from '../../shared/services/task-data.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {
  @ViewChild('taskForm') taskForm!: FormGroupDirective;
  @ViewChild('nameInput', {static: false}) nameInput!: ElementRef<HTMLElement>;
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
    const formatedTask: ITask = this.formatTaskService.formatTask({
        text: this.addTaskForm.controls['taskTextInput'].value, 
        date: this.addTaskForm.controls['taskDatePicker'].value
      }
    );
    
    this.taskDataService.addTask(formatedTask);
    this.taskForm.resetForm();
  }

  onAddTaskBtnClicked() {
    this.isAddTaskClicked = true;
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 500)
  }

}
