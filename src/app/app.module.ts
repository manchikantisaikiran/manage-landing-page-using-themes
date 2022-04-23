import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartsComponent } from './components/charts/charts.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { ResponseCardComponent } from './components/response-card/response-card.component';
import { ResponseSectionLayoutComponent } from './components/response-section-layout/response-section-layout.component';
import { AboutManageComponent } from './components/about-manage/about-manage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ChartsComponent,
    Footer2Component,
    ResponseCardComponent,
    ResponseSectionLayoutComponent,
    AboutManageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    BootstrapIconsModule.pick(allIcons),
    BrowserAnimationsModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
