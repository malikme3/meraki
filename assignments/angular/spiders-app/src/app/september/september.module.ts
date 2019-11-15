import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdChildComponent } from './third-child/third-child.component';
import { FourthChildComponent } from './fourth-child/fourth-child.component';
import { FirstDirectiveDirective } from './first-directive.directive';

@NgModule({
  declarations: [ThirdChildComponent, FourthChildComponent, FirstDirectiveDirective],
  exports: [ThirdChildComponent, FourthChildComponent, FirstDirectiveDirective],
  imports: [CommonModule],
})
export class SeptemberModule {}
