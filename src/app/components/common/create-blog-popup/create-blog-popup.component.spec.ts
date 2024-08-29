import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogPopupComponent } from './create-blog-popup.component';

describe('CreateBlogPopupComponent', () => {
  let component: CreateBlogPopupComponent;
  let fixture: ComponentFixture<CreateBlogPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBlogPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBlogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
