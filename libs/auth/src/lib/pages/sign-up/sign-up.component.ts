import { Component } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'card-managemnt-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    level:['', [Validators.required]]
  });

  constructor(private formBuilder:FormBuilder) { }
  

  register(){
    console.log(this.form.value)
    
  }

}
