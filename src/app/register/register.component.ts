import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage:String;
  successMessage:String;


  constructor(private fb:FormBuilder,private registrationService:RegistrationServiceService) { }

  registrationForm=this.fb.group({
    username: ["",Validators.required],
    name: ["",Validators.required],
    address: ["",Validators.required],
    emailId: ["",Validators.required],
    password: ["",Validators.required],
    confirmPassword: ["",Validators.required],
    role:[""]
  })

  ngOnInit(): void {
  }

  register(){
    this.errorMessage=null;
    this.successMessage=null;
    
    this.registrationService.submitRegisterUser(this.registrationForm.value)
    .subscribe(
      
  
      (response)=>{
        
           console.log(response);
           this.successMessage=response.message;
           console.log("success here inside");
           return response
           //this.router.navigate(['/viewMovie'])
         },
         (error)=>{
           this.errorMessage=error.error;
           console.log("error");
         }
       )
     }
   }
   



