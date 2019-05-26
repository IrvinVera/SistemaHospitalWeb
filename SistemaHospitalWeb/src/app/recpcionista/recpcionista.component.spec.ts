import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpcionistaComponent } from './recpcionista.component';

describe('RecpcionistaComponent', () => {
  let component: RecpcionistaComponent;
  let fixture: ComponentFixture<RecpcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecpcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
