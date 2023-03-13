import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo: string = "assets/img/logo.svg";
  closeResult = '';
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: any = null;
  returnUrl: any;
  ipAddress:any;
  userIP:any;
  SytemInfoSubject:any;
  ipaddressurl:any;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', [
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.required
      ]]
    });
  }
  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }else{
      this.router.navigate(["/user-list"]);
    }


  }

}
