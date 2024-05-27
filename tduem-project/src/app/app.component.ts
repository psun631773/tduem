import { Component, ViewChild } from '@angular/core';
import { SolutionsComponent } from './solutions/solutions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(SolutionsComponent) solutionsComponent!: SolutionsComponent;

  scrollToSolutions() {
    this.solutionsComponent.scrollToSolutions();
  }
}









