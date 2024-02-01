import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentjsComponent } from './momentjs.component';

describe('MomentjsComponent', () => {
  let component: MomentjsComponent;
  let fixture: ComponentFixture<MomentjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
