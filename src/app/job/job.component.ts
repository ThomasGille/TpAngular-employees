import { Component, OnInit, Input, Output } from '@angular/core';
import { Job } from '../models/job';
import { CommonService } from '../services/common.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() job_id: number;
  @Output() choose = new EventEmitter();
  jobs: Job [];
  error: any;


  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): any {
    this.commonService.getJobs().subscribe(
      (data) => { this.jobs = data; },
      (error) => { this.error = error.message; }
    );
  }

  onChange(value: string) {
    this.job_id = +value;
    this.choose.emit(value);
  }
}
