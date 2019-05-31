import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCancelarConsultaComponent } from './dialog-cancelar-consulta.component';

describe('DialogCancelarConsultaComponent', () => {
  let component: DialogCancelarConsultaComponent;
  let fixture: ComponentFixture<DialogCancelarConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCancelarConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCancelarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
