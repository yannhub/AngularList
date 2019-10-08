import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit {
  users$: Observable<User[]>;
  ColumnMode = ColumnMode;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(private userService: UserService) {
    this.users$ = userService.users$;
  }

  ngAfterViewInit() {
    this.users$.subscribe(_ => {
      this.table.offset = 0;
    });
  }
}
