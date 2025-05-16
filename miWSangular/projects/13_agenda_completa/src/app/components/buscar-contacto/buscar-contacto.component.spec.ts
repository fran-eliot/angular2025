import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarContactoComponent } from './buscar-contacto.component';

describe('BuscarContactoComponent', () => {
  let component: BuscarContactoComponent;
  let fixture: ComponentFixture<BuscarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
