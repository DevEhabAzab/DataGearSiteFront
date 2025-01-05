import { Component } from '@angular/core';
import { Router,NavigationExtras ,NavigationEnd ,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import  '../../../custom-video-module';  // Import the custom video module
import { ChangeDetectorRef } from '@angular/core'; // Import ChangeDetectorRef
import { BlogService } from 'src/app/components/common/blog/blog.service';
import { environment } from 'src/environments/environment';
import Quill from 'quill';



@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  htmlContent: string = "<p></p><p>sjkf hdkj fhsd</p><p>fhkdsj hfks dfh</p><p>fhkds fh</p><video width=\"640\" height=\"360\" controls=\"\"><source src=\"https://static.videezy.com/system/resources/previews/000/055/284/original/20201011_savings_78.mp4\" type=\"video/mp4\" style=\"align-content: center;\"></video>";  // Model to hold HTML content
  showPreview = false; // Controls the toggle between editor and preview
  headImageUrl='';
  blogData:any;
  private API_URL= environment.API_URL;
  isLoading: boolean = false;

  public previewOptions:any[]= [
    { label: 'Preview', value: 'w'},
    { label: 'Edit', value: 'false' }
  ];

  public blogForm: FormGroup;
  categories: any = [
    // Populate with actual categories
    { categoryId: 1, categoryName: 'Technology', blogs: [] },
    { categoryId: 2, categoryName: 'Lifestyle', blogs: [] },
  ];
  public slug: any;
  editorConfig = {
    // toolbar: {
    //   container: '#toolbar', // Selector for toolbar container
    //   handlers: {
    //     'image': this.imageHandler.bind(this) // Bind `this` to the component instance
    //   }
    // }

    toolbar: [
      ['bold', 'italic', 'underline'],        // Toggle buttons
      [{ 'header': 1 }, { 'header': 2 }],     // Custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],             // Link, Image, and Video
      [{ 'align': [] }],
      ['clean']                               // Remove formatting button
    ],
    videoUploader: true,  // Activate the custom video uploader module
    imageUploader: true,  // Activate the custom video uploader module

    // handlers: {
    //   'image': this.imageHandler.bind(this) // Bind `this` to the component instance
    // }
  };
  imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    console.log("WWwwwwwwwww")
    input.addEventListener('change', (event: Event) => {
      const file = (event.target as HTMLInputElement).files![0];
      console.log("WWwwwwwwwww")
      if (file) {
        console.log("WWwwwwwwwww")
        const reader = new FileReader();
        reader.onload = () => {
          const url = reader.result as string;
          const range = (this as any).quill.getSelection();
          (this as any).quill.insertEmbed(range.index, 'image', url);
        };
        reader.readAsDataURL(file);
      }
    });
  
    input.click();
  }
 
  constructor(private router: Router,private route: ActivatedRoute,private fb: FormBuilder,private blogService: BlogService) {

    // Initialize the form
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      content: [''],
      category: [null, Validators.required],
      imageUrl: [null]
    });
  }
  
  ngOnInit() {
    this.isLoading=true;
    this.slug =this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getDataBySlug(this.slug).subscribe((data:any)=>{
      this.blogData=data;
      console.log(data)
      this.blogForm.patchValue({
        imageUrl: data.imageUrl,
        content:data.content,
        category:data.categoryId,
        title:data.title
      });
      this.isLoading=false;
    });

    console.log(this.slug);

    this.blogService.getCategories().subscribe((catData: any) => {
      this.categories = catData;
    });
    // const quill = new Quill('#editor-container', {
    //   theme: 'snow',
    //   modules: {
    //     toolbar: {
    //       container: [
    //         [{ 'header': '1' }, { 'header': '2' }],
    //         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    //         ['bold', 'italic', 'underline'],
    //         ['link', 'image'], // Add image button
    //         ['clean'] // Add button to clear formatting
    //       ],
    //       handlers: {
    //         'image': this.imageHandler.bind(this) // Bind `this` to the component instance
    //       }
    //     }
    //   }
    // });
    //var quil =new Quill('#editor',this.editorConfig)
  }
  async onFileChange(event: any): Promise<any> {
    const file = event.target.files[0];
    if (file) {

      await this.processFile(file);
    }
  }

  async processFile(file: File): Promise<any>{

    
    var res= await BlogService.instance.uploadFileToBlog("new_slug_for_this",file);
        console.log("response of upload video",res.fileUrl)
        this.headImageUrl = res.fileUrl;
        this.blogForm.patchValue({
          imageUrl: res.fileUrl
        });
    //     //is.uploadVideo(res.fileUrl);
    // const reader = new FileReader();

    // reader.onload = (e: any) => {
    //   const binaryData = e.target.result; // This is an ArrayBuffer
    //   console.log('File binary data:', binaryData);

    //   // Optionally, convert binary data to Base64 URL
    //   const base64Data = this.arrayBufferToBase64(binaryData);
    //   console.log('Base64 Data URL:', base64Data);

    //   //this.blogData.ImageUrl=base64Data;
    //   // Handle binary data directly
    //   this.headImageUrl = base64Data;
    //   this.blogForm.patchValue({
    //     imageUrl: base64Data
    //   });
    // };

    // reader.readAsArrayBuffer(file); // Read file as binary data
  }

  // Helper function to convert ArrayBuffer to Base64
  arrayBufferToBase64(buffer: ArrayBuffer): string {
    const byteArray = new Uint8Array(buffer);
    let binary = '';
    const len = byteArray.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(byteArray[i]);
    }
    return 'data:image/png;base64,' + window.btoa(binary);
  }





// Toggle between preview and editor
togglePreview(): void {
  this.showPreview = !this.showPreview;
  console.log("vaxxxxlue", this.blogForm.controls['content'].value)
}

  async onSubmit() {
    this.isLoading=true;
    console.log("is valid ", this.blogForm.valid)
    console.log("is blog ", this.blogForm)
    console.log("content ",this.htmlContent)
    if (this.blogForm.valid) {
      const blogData = this.blogForm.value;
      this.blogData.imageUrl=blogData.imageUrl;
      this.blogData.content=blogData.content;
      this.blogData.categoryId=blogData.category;
      this.blogData.title=blogData.title;
      console.log("blog data : ===>",this.blogData)

      const response = await this.blogService.updateDataAsync(this.blogData);

      this.isLoading=false;
      this.router.navigate(['/blogs']);

      console.log('Data created:', response);
      
      // Handle form submission
      // this.blogService.updateDataAsync(this.blogData).subscribe((data)=>{
      //     alert("blog created Success")
      // },(err)=>{
      //   alert("cannot update blog ")
      // });
    }
  }
  
  
}
