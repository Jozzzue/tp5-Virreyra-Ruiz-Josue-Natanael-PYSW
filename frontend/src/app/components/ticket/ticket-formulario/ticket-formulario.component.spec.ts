import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormularioComponent } from './ticket-formulario.component';

describe('TicketFormularioComponent', () => {
  let component: TicketFormularioComponent;
  let fixture: ComponentFixture<TicketFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
