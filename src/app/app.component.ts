import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as Hammer from 'hammerjs';
import { Observable, Subject } from 'rxjs';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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

    const swipe = new Hammer(elementRef.nativeElement, {});
    function getStartPosition(e) {
      const delta_x = e.deltaX;
      const delta_y = e.deltaY;
      const final_x = e.srcEvent.pageX || e.srcEvent.screenX || 0;
      const final_y = e.srcEvent.pageY || e.srcEvent.screenY || 0;

      return {
        x: final_x - delta_x,
        y: final_y - delta_y
      };
    }
    swipe.on('panright', e => {
      e.preventDefault();
      const { x } = getStartPosition(e);
      if (x >= 0 && x <= 50) {
        this.sidenav.open();
      }
    });
  }

  sideNavClick(): void {
    this.sidenav.close();
  }
}
