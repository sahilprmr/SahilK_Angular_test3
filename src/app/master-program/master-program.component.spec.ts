import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProgramComponent } from './master-program.component';

describe('MasterProgramComponent', () => {
  let component: MasterProgramComponent;
  let fixture: ComponentFixture<MasterProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
