import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  console() {
    console.log("it works");
      }

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  getCourses(): void {
   this.courseService.getCourses().subscribe(
      courses => this.courses = courses
   );
  }

  ngOnInit(): void {
    this.getCourses();
  }

  changeDevelop(course:Course): void{
    this.courseService.changeDevelp(course).subscribe();
  }

}
