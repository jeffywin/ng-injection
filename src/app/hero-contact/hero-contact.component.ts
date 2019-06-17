import {
  Component,
  OnInit,
  Host,
  Optional,
  SkipSelf,
  Self
} from "@angular/core";
import { LoggerService } from "../logger.service";
import { RUNNER, runnerFactory } from "../runner";

@Component({
  selector: "app-hero-contact",
  templateUrl: "./hero-contact.component.html",
  styleUrls: ["./hero-contact.component.scss"],
  providers: [LoggerService]
})
export class HeroContactComponent implements OnInit {
  logs: string[] = [];
  hasLogger = false;
  constructor(
    // @Self() // 只在当前组件中查找依赖，只用自己的提供商，如果不加，就会向上级找提供商
    // @Optional // 找不到依赖置为null，不报错
    // @Host 只去上一级组件找依赖
    @SkipSelf() // 跳过自己的提供商
    private loggerService: LoggerService
  ) {
    if (loggerService) {
      this.hasLogger = true;
      this.logs = loggerService.logs;
      loggerService.logInfo("接触英雄组件中的log信息");
    }
  }

  ngOnInit() {}
}
