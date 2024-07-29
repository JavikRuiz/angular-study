import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  constructor(private fb: FormBuilder){}

  /*-------------------------------formControl-----------------------------*/
  // formContact = new FormGroup({
  //   'name':  new FormControl('', Validators.required),
  //   'email': new FormControl('', [Validators.required, Validators.email])
  // })

  /*--------------------------------formBuilder----------------------------*/
  formContact = this.fb.group({
    'name':['', Validators.required],
    'email': ['', [Validators.required, Validators.email]]
  })

  get name() {
    return this.formContact.get('name') as FormControl
  }
  get email() {
    return this.formContact.get('email') as FormControl
  }

  procesar() {
    console.log(this.formContact.value)
  }

}
