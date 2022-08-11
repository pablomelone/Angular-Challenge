import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full"},
  { path: "dashboard", component: DashboardComponent},
  { path: "courses", component: CourseComponent },
  { path: "courses/:id", component: CourseDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
