import { Component } from '@angular/core';
import { Router,NavigationExtras ,NavigationEnd ,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import '../../../custom-video-module';  // Import the custom video module


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {

  public blogForm: FormGroup;
  categories: any = [
    // Populate with actual categories
    { categoryId: 1, categoryName: 'Technology', blogs: [] },
    { categoryId: 2, categoryName: 'Lifestyle', blogs: [] },
  ];
  public slug: any;
  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],        // Toggle buttons
      [{ 'header': 1 }, { 'header': 2 }],     // Custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],             // Link, Image, and Video
      [{ 'align': [] }],
      ['clean']                               // Remove formatting button
    ]
  };
  
  constructor(private router: Router,private route: ActivatedRoute,private fb: FormBuilder) {

    // Initialize the form
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: [''],
      categoryId: [null, Validators.required],
      imageUrl: [null]
    });
  }

  ngOnInit() {
    this.slug =this.route.snapshot.paramMap.get('slug')!;
    console.log(this.slug);

  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.blogForm.patchValue({
          imageUrl: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  }
  showPreview = false; // Controls the toggle between editor and preview

// Toggle between preview and editor
togglePreview(): void {
  this.showPreview = !this.showPreview;
  console.log("vaxxxxlue", this.blogForm.controls['content'].value)
}
onchangwwwwe(){
  
}
  onSubmit(): void {
    console.log("is valid ", this.blogForm.valid)
    console.log("is blog ", this.blogForm)

    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      console.log(blogData);
      // Handle form submission
    }
  }
  
}
