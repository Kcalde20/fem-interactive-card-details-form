import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  formatCardNumber(s: any) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
  }

  creditCardForm = new FormGroup ({
    name: new FormControl('', [
      Validators.required
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9\s]*$/)
    ]),
    expDateMonth: new FormControl('', [
      Validators.required
    ]),
    expDateYear: new FormControl('', [
      Validators.required
    ]),
    cvc: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ])
  })
}
