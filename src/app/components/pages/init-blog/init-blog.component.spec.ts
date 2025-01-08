import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitBlogComponent } from './init-blog.component';

describe('InitBlogComponent', () => {
  let component: InitBlogComponent;
  let fixture: ComponentFixture<InitBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
