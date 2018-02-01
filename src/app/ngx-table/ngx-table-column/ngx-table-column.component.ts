import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-table-column',
  templateUrl: './ngx-table-column.component.html',
  styleUrls: ['./ngx-table-column.component.css']
})
export class NgxTableColumnComponent  {
  @Input('field') public field;
  @Input('title') public title;
}
