import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureWeatherComponent } from './future-weather.component';

describe('FutureWeatherComponent', () => {
  let component: FutureWeatherComponent;
  let fixture: ComponentFixture<FutureWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
