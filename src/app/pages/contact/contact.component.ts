// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registrationForm: FormGroup;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      userName: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('Your message has been sent!');
  } else {
    this.alertify.error('Please fill in all the required fields!');
  }
}

get email() {
  return this.registrationForm.get('email') as FormControl;
}

get userName() {
  return this.registrationForm.get('userName') as FormControl;
}

get message() {
  return this.registrationForm.get('message') as FormControl;
}

}
