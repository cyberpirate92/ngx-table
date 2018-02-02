import {
    Component,
    ContentChildren,
    Input,
    Output,
    EventEmitter,
    AfterContentInit,
    OnChanges
} from '@angular/core';
import { NgxTableColumnComponent } from '../ngx-table-column/ngx-table-column.component';
import { RowClickEvent } from '../models/row-click-event';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'ngx-table',
    templateUrl: './ngx-table.component.html',
    styleUrls: ['./ngx-table.component.css']
})
export class NgxTableComponent implements AfterContentInit, OnChanges {

    Object = Object;
    @Input('data') data: any[] = undefined;
    @Input('noRecords') noRecordsText: string = undefined;
    @Output('rowClick') onRowClick: EventEmitter<RowClickEvent> = new EventEmitter<RowClickEvent>();
    @ContentChildren(NgxTableColumnComponent) columns: NgxTableColumnComponent[] = undefined;

    public _rowData: any[] = [];
    public _columnNames: string[] = [];

    public ngAfterContentInit(): void {
        this._reloadGrid();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        // TODO: reload grid on Changes
        console.log(changes);
    }

    public onRowClicked(originalEvent: any, rowIndex: number): void {
        let rowClickEvent: RowClickEvent = {
            dataItem: this.data[rowIndex],
            rowIndex: rowIndex,
            originalEvent: originalEvent
        };
        this.onRowClick.emit(rowClickEvent);
    }

    private _extractColumnNames(objArray: any[]): string[] {
        let propertyNames: string[] = [];
        if (objArray && objArray.length > 0) {
            let propNameSet: Set<string> = new Set<string>();
            objArray.forEach(obj => Object.keys(obj).forEach(propertyName => propNameSet.add(propertyName)));
            propNameSet.forEach(columnName => propertyNames.push(columnName));
        }
        return propertyNames;
    }
 
    private _extractRows(objArray: any, propertyNames: string[]): any {
        let rowDataByColumn: any = {};
        if (objArray && objArray.length > 0 && propertyNames && propertyNames.length > 0) {
            propertyNames.forEach((propName: string) => {
                let columnData: any[] = [];
                if (propName && propName.length > 0) {
                    objArray.forEach((obj: any) => {
                        if (obj && obj.hasOwnProperty(propName)) {
                            if (typeof(obj[propName]) !== 'object')
                                columnData.push(obj[propName]);
                            else
                                columnData.push(null);
                        }
                        else {
                            columnData.push(null);
                        }
                    });
                    rowDataByColumn[propName] = columnData;
                }
            });
        }
        return rowDataByColumn;
    }

    private _reloadGrid(): void {
        if (this.data && this.data.length > 0) {
            if (this.columns && this.columns.length > 0)
                this.columns.forEach(column => this._columnNames.push(column.field));
            else 
                this._columnNames = this._extractColumnNames(this.data);
            this._rowData = this._extractRows(this.data, this._columnNames);
        }
    }
}
