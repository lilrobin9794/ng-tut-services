import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html'
})
export class CmpBComponent implements OnInit {
  value = '';
  items: string[] = [];

  constructor(private logService: LogService, private dataService: DataService) { }

  ngOnInit(){
    this.dataService.pushedData.subscribe((data:string) => this.value = data);
  }

  onLog(value: string) {
    this.logService.log(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.items = this.dataService.getData();
  }
}
