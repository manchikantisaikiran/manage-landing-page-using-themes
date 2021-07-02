import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manage';
  constructor(){
    const html = document.querySelector('html');
    const currentTheme = localStorage.getItem('currentTheme');
    if(currentTheme){
      html?.setAttribute('class',currentTheme);
    }
  }


}
