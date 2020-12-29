import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhubComponent } from './userhub.component';

describe('UserhubComponent', () => {
  let component: UserhubComponent;
  let fixture: ComponentFixture<UserhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
