import { Component, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  animations: [
    trigger('slideInLeft', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition('void => *', [
        animate('2.5s ease-out', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class FeaturesComponent{
  // isVisible: boolean = false;

  // // @ViewChild('featureSection', { static: true }) featureSection!: ElementRef;

  // constructor(private renderer: Renderer2) {}

  // ngAfterViewInit() {
  //   this.renderer.listen('window', 'scroll', () => {
  //     const componentPosition = this.featureSection.nativeElement.getBoundingClientRect().top;
  //     const scrollPosition = window.innerHeight;

  //     if (componentPosition < scrollPosition) {
  //       this.isVisible = true;
  //     }
  //   });
  // }

  // scrollToFeatures() {
  //   this.featureSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //   this.isVisible = true;
  // }
}
// function ViewChild(arg0: string, arg1: { static: boolean; }): (target: FeaturesComponent, propertyKey: "featureSection") => void {
//   throw new Error('Function not implemented.');
// }

