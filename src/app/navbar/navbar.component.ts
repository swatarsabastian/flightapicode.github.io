import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
 userRole?:string|any;
 showAdminBoard = false;
  showUserrBoard = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private routerService:RouterService) {}
  ngOnInit(): void {
   //debugger;
    this.userRole =this.routerService.getUserRole();
    this.showAdminBoard = this.userRole.includes('ADMIN');
    this.showUserrBoard = this.userRole.includes('USER');
    
    }
    
  }

