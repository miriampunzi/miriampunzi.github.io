import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmersivePageComponent } from './immersive-page.component';

describe('ImmersivePageComponent', () => {
  let component: ImmersivePageComponent;
  let fixture: ComponentFixture<ImmersivePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmersivePageComponent]
    });
    fixture = TestBed.createComponent(ImmersivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
