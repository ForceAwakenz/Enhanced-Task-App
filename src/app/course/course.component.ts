import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, timeout} from 'rxjs/operators';
import {merge, fromEvent} from "rxjs";


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

    course:Course;

    lessons = [
        {
            id: 1,
            "description": "Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step",
            "duration": "4:17",
            "seqNo": 1,
            courseId: 1
        },
        {
            id: 2,
            "description": "Building Your First  Component - Component Composition",
            "duration": "2:07",
            "seqNo": 2,
            courseId: 1
        },
        {
            id: 3,
            "description": "Component @Input - How To Pass Input Data To an  Component",
            "duration": "2:33",
            "seqNo": 3,
            courseId: 1
        },
        {
            id: 4,
            "description": " Component Events - Using @Output to create custom events",
            "duration": "4:44",
            "seqNo": 4,
            courseId: 1
        },
        {
            id: 5,
            "description": " Component Templates - Inline Vs External",
            "duration": "2:55",
            "seqNo": 5,
            courseId: 1
        },
        {
            id: 6,
            "description": "Styling  Components - Learn About Component Style Isolation",
            "duration": "3:27",
            "seqNo": 6,
            courseId: 1
        },
        {
            id: 7,
            "description": " Component Interaction - Extended Components Example",
            "duration": "9:22",
            "seqNo": 7,
            courseId: 1
        },
        {
            id: 8,
            "description": " Components Tutorial For Beginners - Components Exercise !",
            "duration": "1:26",
            "seqNo": 8,
            courseId: 1
        },
        {
            id: 9,
            "description": " Components Tutorial For Beginners - Components Exercise Solution Inside",
            "duration": "2:08",
            "seqNo": 9,
            courseId: 1
        },
        {
            id: 10,
            "description": " Directives - Inputs, Output Event Emitters and How To Export Template References",
            "duration": "4:01",
            "seqNo": 10,
            courseId: 1
        }
    ];

    constructor(private route: ActivatedRoute,
                private coursesService: CoursesService) {

    }

    displayedColumns = ['seqNo', 'description', 'duration'];

    ngOnInit() {

        this.course = this.route.snapshot.data["course"];

    }

    ngAfterViewInit() {

    }


}
