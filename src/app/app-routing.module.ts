import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListByJobComponent } from './list-by-job/list-by-job.component';
import { ListByDeptComponent } from './list-by-dept/list-by-dept.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/job', component: ListByJobComponent},
  { path: 'employees/job/:job_id', component: EmployeesComponent},
  { path: 'employees/dep', component: ListByDeptComponent},
  { path: 'employees/dep/:department_id', component: ListByDeptComponent},
  { path: 'employee/:employee_id', component: EmployeeComponent },
  { path: 'employee', component: EmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
