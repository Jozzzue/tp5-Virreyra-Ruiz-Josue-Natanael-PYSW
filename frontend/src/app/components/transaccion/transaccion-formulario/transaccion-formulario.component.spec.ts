import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionFormularioComponent } from './transaccion-formulario.component';

describe('TransaccionFormularioComponent', () => {
  let component: TransaccionFormularioComponent;
  let fixture: ComponentFixture<TransaccionFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
