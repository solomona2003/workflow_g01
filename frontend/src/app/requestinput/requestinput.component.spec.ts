import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestinputComponent } from './requestinput.component';

describe('RequestinputComponent', () => {
  let component: RequestinputComponent;
  let fixture: ComponentFixture<RequestinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
