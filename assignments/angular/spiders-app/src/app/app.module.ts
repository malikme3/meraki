import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FirstChildComponent } from './first/first-child/first-child.component';
import { SecondChildComponent } from './first/second-child/second-child.component';
import { SeptemberModule } from './september/september.module';

@NgModule({
  declarations: [AppComponent, FirstComponent, FirstChildComponent, SecondChildComponent],
  imports: [BrowserModule, SeptemberModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
