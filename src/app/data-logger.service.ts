import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root"
})
export class DataLoggerService extends LoggerService {
  logInfo(msg: any) {
    //调用父类的方法
    super.logInfo(stamp(msg));
  }
  logDebug(msg: any) {
    super.logDebug(stamp(msg));
  }
  logError(msg: any) {
    super.logError(stamp(msg));
  }
}

function stamp(msg: any) {
  return `${msg}的时间是${new Date()}`;
}
