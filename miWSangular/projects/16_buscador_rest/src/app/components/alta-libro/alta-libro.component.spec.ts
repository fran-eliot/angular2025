import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaLibroComponent } from './alta-libro.component';

describe('AltaLibroComponent', () => {
  let component: AltaLibroComponent;
  let fixture: ComponentFixture<AltaLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
