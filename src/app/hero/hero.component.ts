import { Component, OnInit } from "@angular/core";
import { Hero, HeroTaxReturn } from "../hero.class";
import { HeroService } from "../hero.service";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  selectedTaxReturns: HeroTaxReturn[] = [];
  heroes: Hero[];
  // heroes: Observable<Hero[]>;
  constructor(private heroService: HeroService) {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
  ngOnInit() {}

  showTaxReturn(hero: Hero) {
    this.heroService.getTaxReturn(hero).subscribe(htr => {
      if (!this.selectedTaxReturns.find(v => v.id === hero.id)) {
        this.selectedTaxReturns.push(htr);
      }
    });
  }
  closeTaxReturn(i: number) {
    this.selectedTaxReturns.splice(i, 1);
  }
}
