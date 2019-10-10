import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
