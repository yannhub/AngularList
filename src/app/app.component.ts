import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BigList';

  @ViewChild(MatSidenav)
  public sidenav: MatSidenav;

  constructor(elementRef: ElementRef) {
    const hammertime = new Hammer(elementRef.nativeElement, {});
    hammertime.on('panright', ev => {
      this.sidenav.open();
    });
    hammertime.on('panleft', ev => {
      this.sidenav.close();
    });
  }

  sideNavClick(): void {
    this.sidenav.close();
  }
}
