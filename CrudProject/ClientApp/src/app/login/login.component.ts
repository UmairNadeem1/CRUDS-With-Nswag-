import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {}
  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password,
    }
    this.http.post("http://localhost:52766/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/details"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
}
