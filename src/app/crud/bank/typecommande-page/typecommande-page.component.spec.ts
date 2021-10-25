import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecommandePageComponent } from './typecommande-page.component';

describe('TypecommandePageComponent', () => {
  let component: TypecommandePageComponent;
  let fixture: ComponentFixture<TypecommandePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecommandePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecommandePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
