import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm?:NgForm |any;
user:User;
  constructor(private userService:UserService,private routerService:RouterService) { 
    console.log('Register Component');
    this.user=new User();

    this.registerForm = new FormGroup({
    
      name: new FormControl('', [Validators.required])
    });
  }


  ngOnInit(): void {
  }
registerUser(registerForm:NgForm)
{
 
    
  console.log(registerForm.value);
  this.user=registerForm.value;
  this.user.role="USER";
 this.user.createdDate= new Date();
 this.user.modifiedDate = new Date();


  console.log(this.user);
  this.userService.registerUser(this.user).subscribe ({
    next: (res) => {
      console.log(res);
      if(res==true)
           Swal.fire(
        'Register Successfull!',
        'User Registration !',
        'success'
        
      )
      else
      this.routerService.gotoLogin();  

      this.routerService.gotoLogin();
      registerForm.resetForm(); 
    },
    error: (e) => {
      console.error(e); Swal.fire(
        'Error!',
        'You clicked the button!',
        'error'
      )
    },

  })
}
}
