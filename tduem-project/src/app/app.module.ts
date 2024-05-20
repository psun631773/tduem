import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { PartnersComponent } from './partners/partners.component';
import { DocumentsComponent } from './documents/documents.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    SolutionsComponent,
    PlatformsComponent,
    PartnersComponent,
    DocumentsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
