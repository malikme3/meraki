import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishwasherComponent } from './dishwasher/dishwasher.component';

@NgModule({
  declarations: [DishwasherComponent],
  imports: [CommonModule],
  exports: [DishwasherComponent],
})
export class KitchenModule {}
