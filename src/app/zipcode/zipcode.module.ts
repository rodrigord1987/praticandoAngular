import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZipcodeRoutingModule } from './zipcode-routing.module';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { ZipcodeComponent } from './zipcode.component';

@NgModule({
  declarations: [
    ZipcodeComponent
  ],
  imports: [
    CommonModule,
    ZipcodeRoutingModule,
    PoModule,
    FormsModule,
  ]
})
export class ZipcodeModule { }
