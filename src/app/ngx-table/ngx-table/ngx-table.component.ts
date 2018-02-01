import { 
  Component,
  ContentChildren,
  Input,
  Output,
  EventEmitter,
  AfterContentInit,
} from '@angular/core';
import { NgxTableColumnComponent } from '../ngx-table-column/ngx-table-column.component';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements AfterContentInit {

    Object = Object;
    @Input('data') data: any[] = undefined;
    @ContentChildren(NgxTableColumnComponent) columns: NgxTableColumnComponent[] = undefined;

    public ngAfterContentInit(): void {

    }
}
