import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authservice: AuthService,
              private router: Router,) {
                this.registerForm = this.formBuilder.group({
                  mail:"",
                  password:"",
                  confirm:""
                });
              }

  ngOnInit(): void {
    this.initFormControl();
  }

  initFormControl(): void{
    this.registerForm = this.formBuilder.group({
      mail: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirm: this.formBuilder.control('')
    });
  };
  
  onSubmit(): void{
    const user = {
      mail: this.registerForm.value.mail,
      password: this.registerForm.value.password
    };
    this.authservice.signUp(user).subscribe((res) => {
      console.log(res)
    });
  };
}
