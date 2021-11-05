import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSupprComponent } from './modif-suppr.component';

describe('ModifSupprComponent', () => {
  let component: ModifSupprComponent;
  let fixture: ComponentFixture<ModifSupprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifSupprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSupprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
