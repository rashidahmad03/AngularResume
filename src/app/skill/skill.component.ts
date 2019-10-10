import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private data: HeroService) { }
  message:string;

  receiveMessage($event: string) {
    this.message = $event
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
