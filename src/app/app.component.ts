import { Component } from '@angular/core';
import { SampleClients } from './data';
import { RowClickEvent } from './ngx-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = SampleClients;
  public lastSelected: any;
  
  public onRowClick(event: RowClickEvent): void {
    console.log(event);
    this.lastSelected = event.dataItem;
  }
}
