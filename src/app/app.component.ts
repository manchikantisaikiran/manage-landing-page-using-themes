import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manage';
  constructor(@Inject(DOCUMENT) private document:Document,
  private localStorage:StorageService){
    const html = this.document.querySelector('html');
    const currentTheme = this.localStorage.get('currentTheme');
    if(currentTheme){
      html?.setAttribute('class',currentTheme);
    }
  }


}
