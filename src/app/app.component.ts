import { Component } from '@angular/core';
import { SampleClients } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = SampleClients;
  // public data = {clients: []};
}
