import { Component, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.css',
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
export class PlatformsComponent {

}
