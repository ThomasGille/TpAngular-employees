import { Job } from './job';
import { Departement } from './departement';

export class Employee {
  public employee_id: number;
  public name: string;
  public job_id: number;
  public manager_id: number;
  public hiredate: Date;
  public salary: number;
  public department_id: number;
  public job: Job;
  public department: Departement;
}
