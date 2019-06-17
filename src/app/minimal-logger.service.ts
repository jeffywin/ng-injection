import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export abstract class MinimalLoggerService {
  logs: string[];
  logInfo: (msg: any) => void;
  logError: (msg: any) => void;
}
