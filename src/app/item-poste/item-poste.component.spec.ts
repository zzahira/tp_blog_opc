import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPosteComponent } from './item-poste.component';

describe('ItemPosteComponent', () => {
  let component: ItemPosteComponent;
  let fixture: ComponentFixture<ItemPosteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPosteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
