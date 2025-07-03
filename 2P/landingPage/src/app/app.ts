import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { ContactMe } from './sections/contact-me/contact-me';
import { AboutMe } from './sections/about-me/about-me';
import { Portfolio } from './sections/portfolio/portfolio';
import { Hero } from './sections/hero/hero';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ContactMe, AboutMe, Portfolio, Hero],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about-me></app-about-me>
      <app-portfolio></app-portfolio>
      <app-contact-me></app-contact-me>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'landingPage';
}
