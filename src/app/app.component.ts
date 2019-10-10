import { Component, ViewChild } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'RashidAhmad';
  mobile = false;
  isMobile = false;
  message: string;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 720;
    console.log(w);
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
  constructor(private data: HeroService) { }
  ngOnInit() {
  
    this.data.currentMessage.subscribe(message => this.message = message)
    this.message="ABOUT ME";
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
  
}
