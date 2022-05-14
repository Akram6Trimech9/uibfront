import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreAdminLayoutComponent } from './registre-admin-layout.component';

describe('RegistreAdminLayoutComponent', () => {
  let component: RegistreAdminLayoutComponent;
  let fixture: ComponentFixture<RegistreAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreAdminLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
