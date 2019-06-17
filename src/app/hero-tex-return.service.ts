import { Injectable } from "@angular/core";
import { Hero, HeroTaxReturn } from "./hero.class";
import { HeroService } from "./hero.service";
@Injectable({
  providedIn: "root"
})
export class HeroTexReturnService {
  constructor(private heroService: HeroService) {}
  private originTaxReturn: HeroTaxReturn;
  private currentTaxReturn: HeroTaxReturn;

  get taxReturn(): HeroTaxReturn {
    return this.currentTaxReturn;
  }
  set taxReturn(htr: HeroTaxReturn) {
    // 接收纳税组件传过来的taxReturn
    this.originTaxReturn = htr; // 原始的数据
    this.currentTaxReturn = htr.clone(); // 克隆后现在的数据
  }
  resetTaxReturn() {
    this.taxReturn = this.originTaxReturn;
  }
  saveTaxReturn() {
    this.taxReturn = this.currentTaxReturn;
    this.heroService.saveTaxReturn(this.currentTaxReturn).subscribe();
  }
}
