import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNuevaConsultaComponent } from './dialog-nueva-consulta.component';

describe('DialogNuevaConsultaComponent', () => {
  let component: DialogNuevaConsultaComponent;
  let fixture: ComponentFixture<DialogNuevaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNuevaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNuevaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
