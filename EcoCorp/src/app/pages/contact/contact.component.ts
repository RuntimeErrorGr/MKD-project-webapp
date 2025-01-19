import { Component } from '@angular/core';
import { ImportsModule } from '../../imports';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../ui-elements/navigation-bar/navigation-bar.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  
  formSubmitted = false;

  constructor() {}

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.phone && this.formData.message) {
      this.formSubmitted = true;
    } else {
      console.log('Form submission failed: Missing required fields');
    }
  }
}
