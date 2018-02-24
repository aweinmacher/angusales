import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustDialogComponent } from './add-cust-dialog.component';

describe('AddCustDialogComponent', () => {
  let component: AddCustDialogComponent;
  let fixture: ComponentFixture<AddCustDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
