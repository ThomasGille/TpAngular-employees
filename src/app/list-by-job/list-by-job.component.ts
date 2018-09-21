import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-by-job',
  templateUrl: './list-by-job.component.html',
  styleUrls: ['./list-by-job.component.css']
})
export class ListByJobComponent implements OnInit {
  error = '';
  title: string;
  job_id: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.title = 'Choix d\'un Job';
  }

  jobSelected(id: number) {
    this.job_id = id;
    this.router.navigate(['employees', 'job', id]);
  }

  reload() {
    this.router.navigate(['employees', 'job', this.job_id]);
  }

}
