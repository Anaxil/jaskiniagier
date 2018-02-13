import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrawtysiacaComponent } from './grawtysiaca.component';

describe('GrawtysiacaComponent', () => {
  let component: GrawtysiacaComponent;
  let fixture: ComponentFixture<GrawtysiacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrawtysiacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrawtysiacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
