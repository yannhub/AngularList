import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BigList';

  @ViewChild(MatSidenav, { static: true })
  public sidenav: MatSidenav;

  constructor(elementRef: ElementRef) {
    const hammertime = new Hammer(elementRef.nativeElement, {});
    hammertime.on('panleft', ev => {
      this.sidenav.close();
    });
    hammertime.on('panright', e => {
      const x = e.center.x;
      if (x >= 0 && x <= 50) {
        this.sidenav.open();
      }
    });
  }

  sideNavClick(): void {
    this.sidenav.close();
  }
}
