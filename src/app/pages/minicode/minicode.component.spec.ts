import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicodeComponent } from './minicode.component';

describe('MinicodeComponent', () => {
  let component: MinicodeComponent;
  let fixture: ComponentFixture<MinicodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
