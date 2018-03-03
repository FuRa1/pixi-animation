import { GreenLightComponent } from './green-light.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GreenLightRoutes } from './green-light.routing';

@NgModule({
  imports: [
    GreenLightRoutes,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [GreenLightComponent],
  exports: [GreenLightComponent],
})
export class GreenLightModule {
}
