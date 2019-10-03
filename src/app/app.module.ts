import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ScrollingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
