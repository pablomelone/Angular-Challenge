import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})

export class CourseDetailComponent implements OnInit {

  course: Course | undefined;

  constructor(  private route: ActivatedRoute,
                private courseService: CourseService,
                private location: Location) { 

  }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.courseService.getCourse(id).subscribe(
        course => this.course = course
    );
  }

  save(): void {
    if (this.course) {
      this.courseService.updateCourse(this.course).subscribe(
        () => this.back()
      );
    }
  }

  back(): void {
    this.location.back();
  }

}
