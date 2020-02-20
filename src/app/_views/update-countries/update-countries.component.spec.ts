import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountriesComponent } from './update-countries.component';

describe('UpdateCountriesComponent', () => {
  let component: UpdateCountriesComponent;
  let fixture: ComponentFixture<UpdateCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
