import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RashidAhmad';
  mobile = false;
  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    console.log(w);
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
  
}
