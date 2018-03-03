import { GreenLightComponent } from './green-light.component';
import { NgModule } from '@angular/core';

import { GreenLightRoutes } from './green-light.routing';

@NgModule({
  imports: [
    GreenLightRoutes,
  ],
  declarations: [GreenLightComponent],
  exports: [GreenLightComponent],
})
export class GreenLightModule {
}
