import { Component, OnInit, Inject, InjectionToken } from "@angular/core";
import { HeroService } from "../hero.service";
import { HeroMonth, Hero } from "../hero.class";
import { LoggerService } from "../logger.service";
import { DataLoggerService } from "../data-logger.service";
import { MinimalLoggerService } from "../minimal-logger.service";
import { RUNNER, runnerFactory } from "../runner";

export const TITLE = new InjectionToken<string>("title");
const someHero = new HeroMonth(1, "jeffywin", "奋斗，努力", "18061791545");
@Component({
  selector: "app-hero-of-the-month",
  templateUrl: "./hero-of-the-month.component.html",
  styleUrls: ["./hero-of-the-month.component.scss"],
  // 依赖注入注入器
  providers: [
    {
      provide: HeroService, //依赖注入提供商的令牌,相当于key，value的形式
      useClass: HeroService
    },
    {
      provide: TITLE,
      useValue: "字符串依赖注入"
    },
    {
      provide: HeroMonth,
      useValue: someHero
    },
    {
      provide: LoggerService,
      useClass: DataLoggerService
    },
    {
      provide: MinimalLoggerService,
      useExisting: LoggerService // MinimalLoggerService别名找LoggerService，然后再找DataLoggerService
    },
    {
      provide: RUNNER,
      useFactory: runnerFactory(2),
      deps: [HeroMonth, HeroService] //HeroMonth：要排除jeffywin
    }
  ]
})
export class HeroOfTheMonthComponent implements OnInit {
  logs: Array<string> = [];
  constructor(
    // 属性装饰器
    @Inject(TITLE) public title: string,
    @Inject(RUNNER) public runner: string,
    public heroOfmonth: HeroMonth,
    // logger: LoggerService
    logger: MinimalLoggerService // 用了别名，logger中只能看到logInfo方法
  ) {
    this.logs = logger.logs;
    logger.logInfo("hero-of-the-month中的信息");
    logger.logInfo("日志信息1");
    logger.logError("出错了");
  }
  ngOnInit() {}
}
