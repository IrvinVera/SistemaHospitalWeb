import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMedicamentoComponent } from './dialog-medicamento.component';

describe('DialogMedicamentoComponent', () => {
  let component: DialogMedicamentoComponent;
  let fixture: ComponentFixture<DialogMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
