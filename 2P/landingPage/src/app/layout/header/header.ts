import { Component } from '@angular/core';
import { DarkMode } from '../dark-mode/dark-mode';

@Component({
  selector: 'app-header',
  imports: [DarkMode],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
