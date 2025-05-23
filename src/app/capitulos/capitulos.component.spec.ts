import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitulosComponent } from './capitulos.component';

describe('CapitulosComponent', () => {
  let component: CapitulosComponent;
  let fixture: ComponentFixture<CapitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
