import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connectForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {this.connectForm = this.formBuilder.group({
                mail:"",
                password:"",
              }); }

  ngOnInit(): void {
    this.initConnexionForm();
  }
  initConnexionForm(): void {
    this.connectForm = this.formBuilder.group({
      mail: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit(){
    const formValues = this.connectForm.value;
    this.authService.signIn(formValues)
    .subscribe((res) => {
      console.log("user connected");
      console.log(res)
    })

  }
}
