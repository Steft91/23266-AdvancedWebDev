import { Routes } from '@angular/router';
import { AboutMe } from './sections/about-me/about-me';
import { ContactMe } from './sections/contact-me/contact-me';
import { Hero } from './sections/hero/hero';
import { Portfolio } from './sections/portfolio/portfolio';

export const routes: Routes = [
    { path: '', component: Hero },
    { path: 'about', component: AboutMe },
    { path: 'portfolio', component: Portfolio },
    { path: 'contact-me', component: ContactMe },
];
