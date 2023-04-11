import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MymodalPage } from './mymodal.page';

describe('MymodalPage', () => {
  let component: MymodalPage;
  let fixture: ComponentFixture<MymodalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MymodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
