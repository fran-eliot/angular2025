import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculacionesComponent } from './matriculaciones.component';

describe('MatriculacionesComponent', () => {
  let component: MatriculacionesComponent;
  let fixture: ComponentFixture<MatriculacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
