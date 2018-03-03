import { RouterModule, Routes } from '@angular/router';
import { GreenLightComponent } from './green-light.component';


const greenLightRoutes: Routes = [
  {
    path: 'green-light', component: GreenLightComponent,
  },
];

export const GreenLightRoutes = RouterModule.forChild(
  greenLightRoutes
);
