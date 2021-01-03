import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaingsComponent } from './campaigns.component';

describe('CampaingsComponent', () => {
  let component: CampaingsComponent;
  let fixture: ComponentFixture<CampaingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
