import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses', // we are referencing an element called courses
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>
        
    `
})
export  class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    //We usually get data from the server. So we need an HTTP service to do this

}