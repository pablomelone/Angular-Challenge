import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    CourseComponent,
    CourseDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
