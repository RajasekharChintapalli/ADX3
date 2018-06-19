import { Component, OnInit } from '@angular/core';
import { rdopService } from './rdop.service';
@Component({
  selector: 'app-rdop',
  templateUrl: './rdop.component.html',
  styleUrls: ['./rdop.component.css'],
  providers: [ rdopService ],
})
export class RdopComponent implements OnInit {

  constructor(private rdopService: rdopService) { }

  ngOnInit() {
    this.getSession();
  }

  getSession(): void{
    this.rdopService.getSession().subscribe(response => {
    console.log(response);
  });
  }

}
