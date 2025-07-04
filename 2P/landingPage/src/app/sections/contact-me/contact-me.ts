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
  // Toasts
  showToast = signal(false);
  toastMensaje = signal('');

  nombre = signal('');
  apellido = signal('');
  correo = signal('');
  telefono = signal('');
  mensaje = signal('');

  actualizarNombre(event: Event) {
    this.nombre.set((event.target as HTMLInputElement).value);
  }

  actualizarApellido(event: Event) {
    this.apellido.set((event.target as HTMLInputElement).value);
  }

  actualizarCorreo(event: Event) {
    this.correo.set((event.target as HTMLInputElement).value);
  }

  actualizarTelefono(event: Event) {
    this.telefono.set((event.target as HTMLInputElement).value);
  }

  actualizarMensaje(event: Event) {
    this.mensaje.set((event.target as HTMLTextAreaElement).value);
  }

  

  onSubmit(event: Event) {
    event.preventDefault();

    if (
      this.nombre().trim() === '' ||
      this.apellido().trim() === '' ||
      this.correo().trim() === '' ||
      this.telefono().trim() === '' ||
      this.mensaje().trim() === ''
    ) {
      this.toastMensaje.set('<i class="fa-solid fa-circle-exclamation"></i> Recuerde llenar todos los campos');
      this.showToast.set(true);
      setTimeout(() => this.showToast.set(false), 3000);
      return;
    }

    // Envío exitoso
    this.toastMensaje.set('<i class="fa-solid fa-circle-check"></i> Formulario enviado exitosamente');
    this.showToast.set(true);
    setTimeout(() => this.showToast.set(false), 3000);

    this.nombre.set('');
    this.apellido.set('');
    this.correo.set('');
    this.telefono.set('');
    this.mensaje.set('');
  }

  
}

