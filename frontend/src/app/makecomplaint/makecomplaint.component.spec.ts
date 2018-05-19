import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecomplaintComponent } from './makecomplaint.component';

describe('MakecomplaintComponent', () => {
  let component: MakecomplaintComponent;
  let fixture: ComponentFixture<MakecomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakecomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
