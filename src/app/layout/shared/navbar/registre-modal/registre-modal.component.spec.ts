import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreModalComponent } from './registre-modal.component';

describe('RegistreModalComponent', () => {
  let component: RegistreModalComponent;
  let fixture: ComponentFixture<RegistreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
