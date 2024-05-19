import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { PartnersComponent } from './partners/partners.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'platforms', component: PlatformsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'documentation', component: DocumentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
