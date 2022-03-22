import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectedFarmService } from './selected-farm.service';

@NgModule({
  imports: [CommonModule],
  providers: [SelectedFarmService],
})
export class CoreModule {}
