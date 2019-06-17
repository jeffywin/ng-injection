import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  logs: string[] = [];
  logInfo(msg: any) {
    this.log(`INFO${msg}`);
  }
  logDebug(msg: any) {
    this.log(`Debug${msg}`);
  }
  logError(msg: any) {
    this.log(`Error${msg}`);
  }
  constructor() {}
  private log(msg: string, isErr = false) {
    this.logs.push(msg);
    isErr ? console.log(msg) : console.log(msg);
  }
}
