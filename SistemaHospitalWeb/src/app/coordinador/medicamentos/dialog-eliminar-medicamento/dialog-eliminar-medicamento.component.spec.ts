import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEliminarMedicamentoComponent } from './dialog-eliminar-medicamento.component';

describe('DialogEliminarMedicamentoComponent', () => {
  let component: DialogEliminarMedicamentoComponent;
  let fixture: ComponentFixture<DialogEliminarMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEliminarMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEliminarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
