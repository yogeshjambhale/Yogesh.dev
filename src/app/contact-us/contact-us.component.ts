import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
    selector: 'app-contact-us',
    imports: [FormsModule],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
    name: string = '';
    email: string = '';
    message: string = '';

    public sendEmail(e: Event) {
        e.preventDefault();

        // REPLACE THESE WITH YOUR ACTUAL CREDENTIALS
        const SERVICE_ID = 'service_zxeuljo';
        const TEMPLATE_ID = 'template_av9will';
        const PUBLIC_KEY = '4wN9Tw-w7fmOA3na-';



        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    alert('Message sent successfully!');
                    this.name = '';
                    this.email = '';
                    this.message = '';
                },
                (error) => {
                    console.error('FAILED...', (error as EmailJSResponseStatus).text);
                    alert('Failed to send message. Please try again later.');
                },
            );
    }
}
