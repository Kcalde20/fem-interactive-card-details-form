import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {

  creditCardForm = new FormGroup ({
    name: new FormControl('', [
      Validators.required
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    expDateMonth: new FormControl(''),
    expDateYear: new FormControl(''),
    cvc: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ])
  })
}