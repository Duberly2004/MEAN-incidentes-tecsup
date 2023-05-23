import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarIncidenteComponent } from './form-registrar-incidente.component';

describe('FormRegistrarIncidenteComponent', () => {
  let component: FormRegistrarIncidenteComponent;
  let fixture: ComponentFixture<FormRegistrarIncidenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegistrarIncidenteComponent]
    });
    fixture = TestBed.createComponent(FormRegistrarIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
