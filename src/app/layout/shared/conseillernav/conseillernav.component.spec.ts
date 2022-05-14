import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillernavComponent } from './conseillernav.component';

describe('ConseillernavComponent', () => {
  let component: ConseillernavComponent;
  let fixture: ComponentFixture<ConseillernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseillernavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
