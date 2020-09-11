import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfoliosRoutingModule } from './portfolios-routing.module';
import { PortfoliosComponent } from './portfolios.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PortfoliosComponent],
  imports: [
    CommonModule,
    PortfoliosRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class PortfoliosModule {}
