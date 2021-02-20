import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:String;
  successMessage:String;

 

  constructor(private router:Router, private fb:FormBuilder,private loginService: LoginServicesService) { }

  loginForm=this.fb.group({
    username: ["",Validators.required],
    password: ["",Validators.required]
  })

  ngOnInit(): void {
  }

  login(){
    this.errorMessage=null;
    this.successMessage=null;
    
    this.loginService.getUser(this.loginForm.value)
    .subscribe(
      
  
      (response)=>{
        
           console.log(response);
           this.successMessage=response.message;
           console.log(response);
           if(response.role=="A"){
            this.router.navigate(['/admin'])
           }else{
            this.router.navigate(['/agent'])
           }
          
          
         },
         (error)=>{
           this.errorMessage=error.error.errorMessage;
           console.log(this.errorMessage);
         }
       )
     }
   }
   



