import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdopComponent } from './rdop.component';

describe('RdopComponent', () => {
  let component: RdopComponent;
  let fixture: ComponentFixture<RdopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
