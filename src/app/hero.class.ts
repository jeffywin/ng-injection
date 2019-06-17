export class HeroMonth {
  constructor(
    public id: number,
    public name: string,
    public description?: string,
    public phone?: string
  ) {}
}

export class Hero {
  id: number;
  name: string;
  tid: string;
}
let nextId = 0;
export class HeroTaxReturn {
  constructor(public id = nextId++, public hero: Hero, public income = 0) {
    if (id === 0) {
      id = nextId++;
    }
  }
  get name() {
    return this.hero.name;
  }

  get tax() {
    return this.income ? this.income * 0.1 : 0;
  }

  get tid() {
    return this.hero.tid;
  }

  toString() {
    return `${this.hero.name}`;
  }

  clone() {
    return new HeroTaxReturn(this.id, this.hero, this.income);
  }
}
