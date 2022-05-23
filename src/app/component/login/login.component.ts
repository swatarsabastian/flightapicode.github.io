import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterService } from 'src/app/services/router.service';
import { UserLoginInfo } from 'src/app/models/user-login-info';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // 
  loginForm: any;
  loginInfo: UserLoginInfo; //instance of logininfo
  user: User = {};
  isLoggedIn = false;
  name: any;


  constructor(private router: Router, private routerService: RouterService, private userService: UserService, private formBuilder: FormBuilder) {
    this.loginInfo = new UserLoginInfo();
    // this.loginForm = formBuilder.group({
    //   name:["",Validators.compose([Validators.required,Validators.minLength(5)])],
    //   password:["",Validators.compose([Validators.required,Validators.minLength(5)])]


    // });

    // this.loginForm = new FormGroup({

    //   password: new FormControl('', [Validators.required,Validators.pattern(
    //     '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    //   )])
    // });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    })
  }


  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    localStorage.setItem('user', this.loginForm.value)
    // this.router.navigate(['/home'])
  }
  userLogin(loginForm: any) {
    this.loginInfo = this.loginForm.value;    //  this.loginInfo.name=this.loginForm.email;
    console.log(this.loginInfo.name);

    this.name = loginForm.name;
    console.log(this.name);
    this.userService.LoginUser(this.loginInfo).subscribe
      ({
        next: (res) => {
          console.log(res);
          let JsonObjectDetails = JSON.stringify(res);
          let userRequiredToken = JSON.parse(JsonObjectDetails);
          console.log(`Token after Login ${userRequiredToken["token"]}`);
          this.routerService.setUserToken(userRequiredToken["token"]);
          this.isLoggedIn = true;
          Swal.fire(
            'Login Success!',
            'User LogIn !',
            'success'
          )
          // this.routerService.gotoAirlines();
         // this.routerService.gotoHeader();
         this.userService.getUser(this.name).subscribe
         ({
           next: (res) => {
             console.log(res);
             this.user = res;
            this.routerService.setUserRoleSession(this.isLoggedIn);
             console.log(this.user.role);
             this.routerService.setUserRole(this.user.role);
             Swal.fire(
               'Login Success!',
               'User LogIn !',
               'success'
             )
             debugger;
             if (this.user.role == "ADMIN") {  
               this.routerService.gotoAirlines();
            //  this.routerService.gotoaddAirline();           
             }
             else if(this.user.role == "USER") {           
               this.routerService.gotoHeader();
             }
           },
           error: (e) => {
             console.error(e); Swal.fire(
               'Error!',
               'You clicked the button!',
               'error'
             )
           },
   
         })
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
