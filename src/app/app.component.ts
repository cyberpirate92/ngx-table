import { Component } from '@angular/core';
import { BIG_DATASET, NESTED_DATASET, SIMPLE_DATASET, SMALL_DATASET } from './data';
import { RowClickEvent } from './ngx-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public SMALL_DATASET = SMALL_DATASET;
  public NESTED_DATASET = NESTED_DATASET;
  public SIMPLE_DATASET = SIMPLE_DATASET;
  public BIG_DATASET = BIG_DATASET;
  public lastSelected: any;
  
  public onRowClick(event: RowClickEvent): void {
    console.log(event);
    this.lastSelected = event.dataItem;
  }
}
