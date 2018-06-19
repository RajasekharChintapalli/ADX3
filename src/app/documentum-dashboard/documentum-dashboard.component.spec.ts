import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentumDashboardComponent } from './documentum-dashboard.component';

describe('DocumentumDashboardComponent', () => {
  let component: DocumentumDashboardComponent;
  let fixture: ComponentFixture<DocumentumDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentumDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
