import Quill from 'quill';

// Customizing the Quill Video Module
const BlockEmbed: any = Quill.import('blots/block/embed');

class VideoBlot extends BlockEmbed {
  static create(url: string) {
    const node = super.create();
    node.setAttribute('src', url);
    node.setAttribute('frameborder', '0');
    node.setAttribute('allowfullscreen', true);
    node.setAttribute('width', '100%');
    node.setAttribute('height', '315');
    return node;
  }

  static value(node: HTMLIFrameElement) {
    return node.getAttribute('src');
  }
}

VideoBlot['blotName'] = 'video';
VideoBlot['tagName'] = 'iframe';
Quill.register(VideoBlot);
