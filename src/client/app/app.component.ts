import { Component } from '@angular/core';
import { Config } from './shared/index';

import { Router } from '@angular/router';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor( private router : Router) {
    this.router = router;
    console.log('Environment config', Config);
  }
}
