import Quill from 'quill';


// Import the BlockEmbed blot from Quill
const BlockEmbed: any = Quill.import('blots/block/embed');

class VideoBlot extends BlockEmbed {
  static create(url: string) {
    console.log("i'm in blot",url)
    const node = super.create();
    const source = document.createElement('source');
    source.setAttribute('src', url);
    source.setAttribute('type', 'video/mp4');
    source.style.alignContent='center'
    node.appendChild(source);
    node.setAttribute('width', '640'); // Default width
    node.setAttribute('height', '360'); // Default height
    node.setAttribute('controls', ''); // Add controls
    console.log("node ",node)
    return node;
  }

  static value(node: HTMLVideoElement) {

    const source = node.querySelector('source');
    console.log(source?.getAttribute('src'))
    return source ? source.getAttribute('src') : 'ay haga';
  }
}



class ImageBlot extends BlockEmbed {
  static create(value: string) {
    let node = super.create();
    node.setAttribute('src', value);
    return node;
  }

  static value(node: HTMLImageElement) {
    return node.getAttribute('src');
  }
}

ImageBlot['blotName'] = 'image';
ImageBlot['tagName']  = 'img';
Quill.register(ImageBlot);

VideoBlot['blotName'] = 'video';
VideoBlot['tagName']  = 'video';
Quill.register(VideoBlot,true);
// Quill.register({
//   'formats/video': VideoBlot
// }, true);



export function imageHandler(this: any) {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  
  input.addEventListener('change', (event: Event) => {
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
      console.log("sssssssssssssssssssss")
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result as string;
        const range = (this.quill as any).getSelection();
        (this.quill as any).insertEmbed(range.index, 'image', url);
      };
      reader.readAsDataURL(file);
    }
  });

  input.click();
}

class VideoUploader {
  constructor(private quill:Quill,private options :any) {
    // this.quill = quill;
    // this.options = options;

    const toolbar:any = this.quill.getModule('toolbar');
    toolbar.addHandler('video', this.selectLocalVideo.bind(this));
  }

  selectLocalVideo() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'video/*');
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      console.log("file",file)
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.uploadVideo(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  }

  uploadVideo(videoDataUrl: string) {
    const range = this.quill.getSelection(true);
    console.log("video url",videoDataUrl)
    console.log("video range",range)

    this.quill.insertEmbed(range.index, 'video',videoDataUrl,'user');
    this.quill.setSelection(range.index + 1);
  }
}
Quill.register('modules/videoUploader', VideoUploader);

class ImageUploader {
  constructor(private quill:Quill,private options :any) {


    const toolbar:any  = this.quill.getModule('toolbar');
    toolbar.addHandler('image', this.selectLocalImage.bind(this));
  }

  selectLocalImage() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.uploadImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  }

  uploadImage(imageDataUrl: string) {
    const range = this.quill.getSelection(true);
    this.quill.insertEmbed(range.index, 'image', imageDataUrl, 'user');  // Pass 'user' as the source
    this.quill.setSelection(range.index + 1);
  }
}

Quill.register('modules/imageUploader', ImageUploader);
