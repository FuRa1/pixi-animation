import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenLightComponent } from './green-light.component';

describe('AnimationComponent', () => {
  let component: GreenLightComponent;
  let fixture: ComponentFixture<GreenLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
