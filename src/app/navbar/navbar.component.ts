import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private data: HeroService) { }
  message:string;


  ngOnInit() {
 
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  
  ABOUTME() {
    this.data.changeMessage("ABOUT ME");

    console.log(this.message);
  }
    
  Skill() {
    this.data.changeMessage("Skill");
    console.log(this.message);
  }
  project() {
    this.data.changeMessage("Project");
    console.log(this.message);
  }
  certificate() {
    this.data.changeMessage("certificate");
    console.log(this.message);
  }
  contact() {
    this.data.changeMessage("contact");
    console.log(this.message);
  }

}
