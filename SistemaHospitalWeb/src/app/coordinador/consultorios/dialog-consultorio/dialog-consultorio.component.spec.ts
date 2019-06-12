import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConsultorioComponent } from './dialog-consultorio.component';

describe('DialogConsultorioComponent', () => {
  let component: DialogConsultorioComponent;
  let fixture: ComponentFixture<DialogConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
