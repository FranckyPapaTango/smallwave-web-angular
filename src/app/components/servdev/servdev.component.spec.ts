import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServdevComponent } from './servdev.component';

describe('ServdevComponent', () => {
  let component: ServdevComponent;
  let fixture: ComponentFixture<ServdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServdevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
