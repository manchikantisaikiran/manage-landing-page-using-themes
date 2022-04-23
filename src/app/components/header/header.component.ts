import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themeSection = false;
  activeThemeMode = 'light';
  activeTheme = 'default';

  constructor(@Inject(DOCUMENT) private document:Document,
  private localStorage:StorageService) {
    const activetheme = this.localStorage.get('currentTheme');
    if(activetheme){
      [this.activeTheme,this.activeThemeMode] = activetheme.split('-');
    }
   }

  ngOnInit(): void {
  }

  sectionThemeClass = {
    'show': this.themeSection
  }

  sectionOverlayClass = {
    'show__overlay': this.themeSection
  }

  toggleTheme() {
    this.themeSection = !this.themeSection;
    this.sectionThemeClass['show'] = this.themeSection;
    this.sectionOverlayClass['show__overlay'] = this.themeSection;
  }

  changeThemeMode(theme: string) {
    this.activeThemeMode = theme;
    const html = this.document.querySelector('html');
    const classToToggle = `${this.activeTheme}-${this.activeThemeMode}`
    html?.setAttribute('class','');
    html?.classList.add(classToToggle);
    this.localStorage.set('currentTheme',`${this.activeTheme}-${this.activeThemeMode}`);
  }

  changeTheme(theme: string) {
    this.activeTheme = theme;
    this.changeThemeMode(this.activeThemeMode);
  }

}
