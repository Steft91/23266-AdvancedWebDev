import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css'
})
export class ContactMe {

  // signal 
  showToast = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    this.showToast.set(true);
    // ocultar toast después de 3 segundos
    setTimeout(() => {
      this.showToast.set(false);
    }, 3000);
  }
}
