import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteBarChartComponent } from './vote-bar-chart.component';

describe('VoteBarChartComponent', () => {
  let component: VoteBarChartComponent;
  let fixture: ComponentFixture<VoteBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
