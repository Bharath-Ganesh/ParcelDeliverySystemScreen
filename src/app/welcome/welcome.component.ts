import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isLogged:boolean;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.isLogged=true;
  }
  
  showLogin(){
    this.router.navigate(['/login'])
  }

  showSignup(){
    this.router.navigate(['/register'])
  }

  

}
