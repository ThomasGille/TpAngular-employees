import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SharedService } from './services/shared.service';
import { HomeComponent } from './home/home.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './services/employee.service';
import { CommonService } from './services/common.service';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { JobComponent } from './job/job.component';
import { DepartmentComponent } from './department/department.component';
import { ListByJobComponent } from './list-by-job/list-by-job.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeComponent,
    ErrorComponent,
    JobComponent,
    DepartmentComponent,
    ListByJobComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    LoginService,
    EmployeeService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
