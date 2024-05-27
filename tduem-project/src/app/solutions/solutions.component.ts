import { Component, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
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
export class SolutionsComponent implements AfterViewInit {
  // isVisible: boolean = false;

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = document.querySelector('.solution-component')!.getBoundingClientRect().top;
  //   const scrollPosition = window.innerHeight;

  //   if (componentPosition < scrollPosition) {
  //     this.isVisible = true;
  //   }
  // }

  // scrollToFeatures() {
  //   document.querySelector('.solution-component')?.scrollIntoView({ behavior: 'smooth' });
  //   this.isVisible = true;
  // }

  isVisible: boolean = false;
  private timer: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen('window', 'scroll', () => {
      const componentPosition = this.el.nativeElement.querySelector('.solution-component').getBoundingClientRect().top;
      const scrollPosition = window.innerHeight;

      if (componentPosition < scrollPosition && componentPosition > 0) {
        if (!this.isVisible) {
          this.isVisible = true;
          this.resetVisibility();
        }
      }
    });
  }

  scrollToSolutions() {
    const element = this.el.nativeElement.querySelector('.solution-component');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isVisible = true;
      this.resetVisibility();
    }
  }

  private resetVisibility() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.isVisible = false;
    }, 2500); // 重置动画状态以确保每次都能重新触发动画
  }
}
