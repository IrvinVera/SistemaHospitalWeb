import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEliminarPersonaComponent } from './dialog-eliminar-persona.component';

describe('DialogEliminarPersonaComponent', () => {
  let component: DialogEliminarPersonaComponent;
  let fixture: ComponentFixture<DialogEliminarPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEliminarPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEliminarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
