import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTematicaComponent } from './buscar-tematica.component';

describe('BuscarTematicaComponent', () => {
  let component: BuscarTematicaComponent;
  let fixture: ComponentFixture<BuscarTematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarTematicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarTematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
