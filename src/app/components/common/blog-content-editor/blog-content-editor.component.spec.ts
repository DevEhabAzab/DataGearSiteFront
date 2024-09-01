import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentEditorComponent } from './blog-content-editor.component';

describe('BlogContentEditorComponent', () => {
  let component: BlogContentEditorComponent;
  let fixture: ComponentFixture<BlogContentEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogContentEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogContentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
