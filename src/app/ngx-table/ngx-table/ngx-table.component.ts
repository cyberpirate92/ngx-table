import { 
  Component,
  ContentChildren,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
} from '@angular/core';
import { NgxTableColumnComponent } from '../ngx-table-column/ngx-table-column.component';
import { RowClickEvent } from '../models/row-click-event';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements AfterContentInit {

    Object = Object;
    @Input('data') data: any[] = undefined;
    @Input('noRecords') noRecordsText: string = undefined;
    @Output('rowClick') onRowClick: EventEmitter<RowClickEvent> = new EventEmitter<RowClickEvent>();
    @ContentChildren(NgxTableColumnComponent) columns: NgxTableColumnComponent[] = undefined;

    public ngAfterContentInit(): void {

    }

    public onRowClicked(originalEvent: any, rowIndex: number): void {
      let rowClickEvent: RowClickEvent = {
        dataItem: this.data[rowIndex],
        rowIndex: rowIndex,
        originalEvent: originalEvent
      };
      this.onRowClick.emit(rowClickEvent);
    }
}
