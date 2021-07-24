import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  providers: [
    DataService
  ]
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
