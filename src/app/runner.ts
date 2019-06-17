import { InjectionToken } from "@angular/core";
import { Hero } from "./hero.class";
import { HeroService } from "./hero.service";

export const RUNNER = new InjectionToken<string>("runner");

export function runnerFactory(take: number) {
  return (winner: Hero, heroService: HeroService): string => {
    return heroService
      .getAllHeroes()
      .filter(hero => hero.name !== winner.name)
      .map(hero => hero.name)
      .splice(0, Math.max(0, take))
      .join(",");
  };
}
