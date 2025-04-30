import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaComponentComponent } from './nota-component.component';

describe('NotaComponentComponent', () => {
  let component: NotaComponentComponent;
  let fixture: ComponentFixture<NotaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
