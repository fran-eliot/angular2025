import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTematicaComponent } from './eliminar-tematica.component';

describe('EliminarTematicaComponent', () => {
  let component: EliminarTematicaComponent;
  let fixture: ComponentFixture<EliminarTematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarTematicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
