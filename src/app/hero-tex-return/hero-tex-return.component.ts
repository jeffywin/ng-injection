import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hero, HeroTaxReturn } from "../hero.class";
import { HeroTexReturnService } from "../hero-tex-return.service";

@Component({
  selector: "app-hero-tex-return",
  templateUrl: "./hero-tex-return.component.html",
  styleUrls: ["./hero-tex-return.component.scss"],
  providers: [HeroTexReturnService] //
})
export class HeroTexReturnComponent implements OnInit {
  message = "";
  @Output() close = new EventEmitter<void>();
  constructor(private heroTexReturnService: HeroTexReturnService) {}

  @Input()
  set taxReturn(hrt: HeroTaxReturn) {
    // 接收hero组件传过来的selectedTaxReturns，然后存进纳税组件
    this.heroTexReturnService.taxReturn = hrt;
  }

  get taxReturn(): HeroTaxReturn {
    return this.heroTexReturnService.taxReturn;
  }
  save() {
    this.setMessage("保存");
    this.heroTexReturnService.saveTaxReturn();
  }
  cancle() {
    this.setMessage("重置");
    this.heroTexReturnService.resetTaxReturn();
  }
  onClose() {
    // close方法发送给父组件hero
    this.close.emit();
  }

  setMessage(msg: string) {
    this.message = msg;
    setTimeout(() => {
      this.message = "";
    }, 1000);
  }
  ngOnInit() {}
}
