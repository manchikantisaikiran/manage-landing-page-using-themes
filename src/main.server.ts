/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
*/
import '@angular/localize/init';

import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0K_nojsoWDdxxdOr5-eGYht0bj7gyJNo",
  authDomain: "manage-landing-page-da767.firebaseapp.com",
  projectId: "manage-landing-page-da767",
  storageBucket: "manage-landing-page-da767.appspot.com",
  messagingSenderId: "495973558509",
  appId: "1:495973558509:web:785019129439a60d9b84e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
