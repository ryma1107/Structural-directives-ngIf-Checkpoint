import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParagrapheComponent } from './show-paragraphe.component';

describe('ShowParagrapheComponent', () => {
  let component: ShowParagrapheComponent;
  let fixture: ComponentFixture<ShowParagrapheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowParagrapheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParagrapheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
