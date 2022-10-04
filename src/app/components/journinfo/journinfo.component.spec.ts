import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourninfoComponent } from './journinfo.component';

describe('JourninfoComponent', () => {
  let component: JourninfoComponent;
  let fixture: ComponentFixture<JourninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourninfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
