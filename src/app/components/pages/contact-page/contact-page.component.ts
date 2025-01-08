import { Component, OnInit } from '@angular/core';
import { ContactFormDto, ContactPageService } from './contact-page.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    public contactData: any;
    contactForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private content: ContactPageService
    ) {
         this.content.getData().subscribe((contactData: any) => {
             this.contactData = contactData;
        });

        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            message: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
          });

    }

    ngOnInit(): void {}
    onSubmit() {
        if (this.contactForm.valid) {
          const formData: ContactFormDto = this.contactForm.value;
          this.content.sendContactForm(formData).subscribe(
            response => {
              console.log('Form submitted successfully', response);
            },
            error => {
              console.error('Error submitting form', error);
            }
          );
        } else {
          console.log('Form is invalid');
        }
      }
}