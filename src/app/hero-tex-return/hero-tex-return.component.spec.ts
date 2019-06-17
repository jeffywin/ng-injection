import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTexReturnComponent } from './hero-tex-return.component';

describe('HeroTexReturnComponent', () => {
  let component: HeroTexReturnComponent;
  let fixture: ComponentFixture<HeroTexReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTexReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTexReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
