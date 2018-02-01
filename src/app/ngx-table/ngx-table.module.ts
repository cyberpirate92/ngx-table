import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { NgxTableColumnComponent } from './ngx-table-column/ngx-table-column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxTableComponent, NgxTableColumnComponent],
  exports: [NgxTableComponent, NgxTableColumnComponent]
})
export class NgxTableModule { }
