import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseillerloginComponent } from './conseillerlogin.component';

describe('ConseillerloginComponent', () => {
  let component: ConseillerloginComponent;
  let fixture: ComponentFixture<ConseillerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseillerloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseillerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
