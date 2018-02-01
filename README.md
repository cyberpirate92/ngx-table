# NgxTable

A lightweight angular table component.

## Usage

Import `NgxTableModule`

**app.module.ts**

```typescript
import { NgxTableModule } from './ngx-table.module';
```

**app.component.ts**

```typescript
export class AppComponent {
    public sampleData: any[] = [
      {
        "id": "59761c23b30d971669fb42ff",
        "age": 36,
        "name": "Dunlap Hubbard",
        "gender": "male",
        "company": "CEDWARD",
        "email": "dunlaphubbard@cedward.com",
        "phone": "+1 (890) 543-2508",
        "address": "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"
      },
      {
        "id": "59761c233d8d0f92a6b0570d",
        "age": 24,
        "name": "Kirsten Sellers",
        "gender": "female",
        "company": "EMERGENT",
        "email": "kirstensellers@emergent.com",
        "phone": "+1 (831) 564-2190",
        "address": "886 Gallatin Place, Fannett, Arkansas, 4656"
      },
      {
        "id": "59761c23fcb6254b1a06dad5",
        "age": 30,
        "name": "Acosta Robbins",
        "gender": "male",
        "company": "ORGANICA",
        "email": "acostarobbins@organica.com",
        "phone": "+1 (882) 441-3367",
        "address": "697 Linden Boulevard, Sattley, Idaho, 1035"
      }
    ]
}
```

**app.component.html**

```html
<ngx-table [data]="sampleData">
    <ngx-table-column field="name" title="Name">
    </ngx-table-column>
    <ngx-table-column field="gender" title="Gender">
    </ngx-table-column>
    <ngx-table-column field="company" title="Company">
    </ngx-table-column>
</ngx-table>
```

Use the `data` input property of `ngx-table` to provide the object array which is to be rendered as a table.

The `ngx-table-column` component can be used to specify the order of columns to be displayed, only the columns specified will be rendered.

`field` is the object property that should be displayed in that column, `title` is optional and can be used to specify an alternate column name. If `title` is not provided, the column name will be the value of `field`.

If no `ngx-table-column` components are specified, all the fields in the data will be rendered as columns.

---

## `NgxTableComponent`

### Selector

```html
  <ngx-table></ngx-table>
```

### Inputs

- `data: any[]` - the data to be displayed in the table
- `noRecords: string` - _optional_ text to display when there are no records present, default text is `No Records`.

### Outputs

- `rowClick:` [`RowClickEvent`](#rowclickevent) - When a row is clicked in the table, a [`RowClickEvent`](#rowclickevent) object is emitted.

---

## `NgxTableColumnComponent`

### Selector

```html
<ngx-table-column></ngx-table-column>
```

### Inputs

- `field: string` - The object property that is to be bound to this column. 

- `title: string` - _optional_ text to be displayed in this column header. When no `title` is provided, `field` is used as the column header.

### Outputs

_`NgxTableColumnComponent` doesn't have any outputs_

---

## Misc

### `RowClickEvent`

Emitted when a row is clicked in the table.

```typescript
{
    rowIndex: number;
    dataItem: any;
    originalEvent: any;
}
```

- `rowIndex` represents the 0 based index of the clicked row.
- `dataItem` contains the data item pertaining to the clicked row.
- `originalEvent` contains the original `click` event object.

---
