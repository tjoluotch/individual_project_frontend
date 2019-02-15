import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulehubComponent } from './modulehub.component';

describe('ModulehubComponent', () => {
  let component: ModulehubComponent;
  let fixture: ComponentFixture<ModulehubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulehubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
