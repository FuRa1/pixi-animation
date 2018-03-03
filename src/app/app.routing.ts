import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/green-light', pathMatch: 'full' },
];

export const AppRoutes = RouterModule.forRoot(
    appRoutes,
    { enableTracing: false }
);
