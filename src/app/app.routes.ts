import { Routes } from '@angular/router';
import { Home } from '../app/home/home'
import { VendorHome } from './vendor/vendor-home/vendor-home';

export const routes: Routes = [
  { path: '', component: Home, },

  
  { path: 'vendors', component: VendorHome, },
];