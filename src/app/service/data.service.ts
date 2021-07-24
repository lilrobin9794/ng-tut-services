import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class DataService {
  data: string[] = [];
  pushedData = new EventEmitter<string>();

  constructor(private logService: LogService) { }

  addData(data: string){
    this.data.push(data);
    this.logService.log("added");
  }

  getData(): string[] {
    return this.data;
  }

  pushData(value: string){
    this.pushedData.emit(value);
  }
}
