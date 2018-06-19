import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  ngAfterViewInit() {
    (window as any).initialize();
  }

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  login(){
    this.router.navigate(['/documentumDashboard']);
   // console.log(`email: ${this.email} password: ${this.password}`)
   // alert(`Email: ${this.email} Password: ${this.password}`)
  }

  ngOnInit() {
  }

  


}


