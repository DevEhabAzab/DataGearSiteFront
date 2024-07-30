import { Component, OnInit, OnDestroy,ElementRef, Renderer2, AfterViewInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-rich-text-editor2',
  templateUrl: './rich-text-editor2.component.html',
  styleUrls: ['./rich-text-editor2.component.scss'],
})
export class RichTextEditorComponent2 implements OnInit ,AfterViewInit {
 form: any;
 text:any;
 editorConfig: any;
 textColor:any;
 private styleId = 'dynamic-style';
 @ViewChild('#ql-picker-options-2') myElement!: ElementRef;

 constructor(private el: ElementRef, private renderer: Renderer2) {}


 ngAfterViewInit() {
  //console.log(this.myElement.nativeElement.getElementsByClassName('ql-picker-options'));
  const jhjcolor=document.getElementsByClassName("ql-color");
  const jhj=document.getElementById("ql-picker-options-2");

  const doc=document.querySelectorAll('.ql-picker-options');
console.log(jhj)
console.log(jhjcolor)



//this.addDynamicStyle()



  doc.forEach(child => {
    console.log(child)
    // Traverse up to the parent <span> element
   // const parentSpan = (child as HTMLElement).closest('span');
      //console.log('Parent span containing child with class "hamada":', parentSpan.textContent);
          // Type assertion to HTMLElement

          var bb=child.querySelectorAll('.ql-picker-item')
      console.log(bb);
      // child.style.width = '100px';
      const element = child as HTMLElement;
      // Set new width and height
      element.style.width = '100px';  // Example width
      element.style.height = '50px'; 
    
  });
  console.log(doc);
  const elements = this.el.nativeElement.querySelector('.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item');
console.log(elements)
  setTimeout(() => {
    const targetElement = this.el.nativeElement.getElementsByClassName('ql-picker-item');

    if (targetElement) {
      console.log(targetElement);
      // Perform any actions on the target element here
      console.log(this.renderer)
      //this.renderer.setStyle(targetElement, 'border', '2px solid red');
    } else {
      console.log('Target element not found');
    }
  }, 5000);
}
  ngOnInit():
   void {
    this.form = new FormGroup({
      editorContent: new FormControl(null)
    });

    
  this.editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };
  }
  // addDynamicStyle() {
  //   const style = this.renderer.createElement('style');
  //   style.id = this.styleId;
  //   style.textContent = `
  //     .ql-color .ql-picker-options .ql-picker-item{width:20px;height:20px}
  //   `;//.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item{width:20px;height:20px}
  //   this.renderer.appendChild(document.head, style);
  // }

  // removeDynamicStyle() {
  //   const styleElement = document.getElementById(this.styleId);
  //   if (styleElement) {
  //     this.renderer.removeChild(document.head, styleElement);
  //   }
  // }



}
