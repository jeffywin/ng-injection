import { Injectable } from "@angular/core";
import { Observable, Observer, of, observable } from "rxjs";
import { Hero, HeroTaxReturn } from "./hero.class";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  // 英雄数据
  heroes: Array<Hero> = [
    { id: 0, name: "jeffywin", tid: "11-11-11" },
    { id: 1, name: "tom", tid: "22-22-22" },
    { id: 2, name: "flankil", tid: "33-33-33" },
    { id: 3, name: "knkl", tid: "44-44-44" },
    { id: 4, name: "king", tid: "55-55-55" }
  ];
  // 英雄纳税数据
  heroTaxReturn: HeroTaxReturn[] = [
    new HeroTaxReturn(10, this.heroes[0], 1000),
    new HeroTaxReturn(20, this.heroes[1], 2000),
    new HeroTaxReturn(30, this.heroes[2], 3000)
  ];
  constructor() {}

  getAllHeroes(): Array<Hero> {
    return this.heroes;
  }

  getHeroes(): Observable<Hero[]> {
    // return new Observable<Hero[]>((observer: Observer<Hero[]>) => {
    //   observer.next(this.heroes);
    //   observer.complete();
    // });
    return of(this.heroes);
  }

  getTaxReturn(hero: Hero): Observable<HeroTaxReturn> {
    return new Observable<HeroTaxReturn>(
      (observer: Observer<HeroTaxReturn>) => {
        let hrt = this.heroTaxReturn.find(t => t.hero.id === hero.id);
        observer.next(hrt || new HeroTaxReturn(0, hero));
        observer.complete();
      }
    );
  }

  saveTaxReturn(heroTaxReturn: HeroTaxReturn): Observable<HeroTaxReturn> {
    return new Observable<HeroTaxReturn>(
      (observer: Observer<HeroTaxReturn>) => {
        let hrt = this.heroTaxReturn.find(t => t.id === heroTaxReturn.id);
        if (hrt) {
          heroTaxReturn = Object.assign(hrt, heroTaxReturn);
        } else {
          this.heroTaxReturn.push(heroTaxReturn);
        }
        observer.next(heroTaxReturn);
        observer.complete();
      }
    );
  }
}
