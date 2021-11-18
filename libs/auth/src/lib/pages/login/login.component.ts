import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'card-managemnt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    level:['', [Validators.required]]
  });
  

  constructor(private formBuilder: FormBuilder,private router: Router) {
    
  }
 
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login(){
    console.log(this.form.value)
    this.router.navigateByUrl('/dashboard');
    
  }
  

  

}
