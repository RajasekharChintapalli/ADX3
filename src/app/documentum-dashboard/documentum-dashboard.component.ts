import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentum-dashboard',
  templateUrl: './documentum-dashboard.component.html',
  styleUrls: ['./documentum-dashboard.component.css']
})
export class DocumentumDashboardComponent implements OnInit {
  rdopList = [
                {img:'assets/img/clin-safety-white.png', bgColor: '#e7a000', appName:'Clinical Safety' , routeUrl:'/dashboard'},
                {img:'assets/img/Insights.png', bgColor: '#fa5b19', appName:'Insights' , routeUrl:'/dashboard'},
                {img:'assets/img/whiteToxIcon-lg.png', bgColor: '#e7a000', appName:'Toxicology' , routeUrl:'/fileUpload'},
                {img:'assets/img/art-works.png', bgColor: '#9124a8', appName:'ARTWORKS' , routeUrl:'/fileUpload'},
                {img:'assets/img/profiles.png', bgColor: '#01628f', appName:'Profiles' , routeUrl:'/fileUpload'},
                {img:'assets/img/riacs.jpg', bgColor: '#fa5b19', appName:'RIACS' , routeUrl:'/fileUpload'},
                {img:'assets/img/Concerto.png', bgColor: '#209e14', appName:'Concerto' , routeUrl:'/fileUpload'},
                {img:'assets/img/Element.png', bgColor: '#14969b', appName:'Elements' , routeUrl:'/fileUpload'},
                {img:'assets/img/rnd.png', bgColor: '#01628f', appName:'RnD Links' , routeUrl:'/fileUpload'},
                {img:'assets/img/rm.png', bgColor: '#a2156e', appName:'RM' , routeUrl:'/fileUpload'}
             ];
  constructor() { }
  name:string = null;
  ngOnInit() {
  }

}
