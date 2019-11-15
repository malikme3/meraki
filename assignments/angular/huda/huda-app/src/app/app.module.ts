import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppChildOneComponent } from './app-child-one/app-child-one.component';
import { SubChildComponent } from './app-child-one/sub-child/sub-child.component';
import { KitchenModule } from './kitchen/kitchen.module';

@NgModule({
  declarations: [AppComponent, AppChildOneComponent, SubChildComponent],
  imports: [BrowserModule, KitchenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
