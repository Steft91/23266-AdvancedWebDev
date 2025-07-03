import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  templateUrl: './dark-mode.html',
  styleUrl: './dark-mode.css'
})
export class DarkMode {
  toggleDarkMode(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    document.body.classList.toggle('dark', isChecked);
  }
}
