import { Component, ElementRef, OnInit, ViewChild ,Input } from '@angular/core';
import lottie from 'lottie-web';
@Component({
  selector: 'app-animation-lottie',
  templateUrl: './animation-lottie.component.html',
  
  styleUrl: './animation-lottie.component.scss'
})
export class AnimationLottieComponent implements OnInit {
    @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
    @Input() isLoading: boolean = false;

    ngOnInit() {
      if (this.lottieContainer && this.lottieContainer.nativeElement) {
        const animation = lottie.loadAnimation({
          container: this.lottieContainer.nativeElement,
          renderer: 'svg', // Use 'svg' or 'canvas' as per your preference
          loop: true,
          autoplay: true,
          path: '/assets/dganmi.json', // Path to your Lottie animation file
        });
      } else {
        console.error('Container not found or does not have nativeElement property.');
      }
    }
}
