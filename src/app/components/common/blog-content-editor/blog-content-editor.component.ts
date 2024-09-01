import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-blog-content-editor',
  templateUrl: './blog-content-editor.component.html',
  styleUrl: './blog-content-editor.component.scss'
})
export class BlogContentEditorComponent {
  

  private _content!: string; // Using '!' to assert that this value will be initialized

  @Input() 
  set content(value: string) {
    if (!value) {
      throw new Error('mandatoryInput is required for ExampleComponent');
    }
    this._content = value;
  }

  get content(): string {
    return this._content;
  }

}
