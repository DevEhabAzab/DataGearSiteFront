import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextEditor2Component } from './rich-text-editor2.component';

describe('RichTextEditor2Component', () => {
  let component: RichTextEditor2Component;
  let fixture: ComponentFixture<RichTextEditor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RichTextEditor2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RichTextEditor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
