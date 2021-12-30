import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTaskToState, saveToStorage } from 'src/app/redux/actions-main';
import { GlobalState } from 'src/app/redux/reducers-main';
import { taskList } from 'src/app/redux/selectors-main';
import { ITask } from 'src/app/shared/models/Task';
import { FormatTaskService } from 'src/app/shared/services/format-task.service';

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
    private formatTaskService: FormatTaskService,
    private store: Store<GlobalState>) {}

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      taskTextInput: new FormControl(null, Validators.required), // Validator treats null as value
      taskDatePicker: new FormControl(null)
    });
  }
  
  onSubmit(): void {
    const formatedTask: ITask = this.formatTaskService.formatTask({
        text: this.addTaskForm.controls['taskTextInput'].value, 
        date: this.addTaskForm.controls['taskDatePicker'].value
      }
    );
    
    this.store.dispatch(addTaskToState({task: formatedTask}));
    this.taskForm.resetForm();
  }

  onAddTaskBtnClicked() {
    this.isAddTaskClicked = true;
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 500)
  }

}
