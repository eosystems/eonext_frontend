import * as React from 'react'
import DataTable from '@salesforce/design-system-react/components/data-table'
import DataTableColumn from '@salesforce/design-system-react/components/data-table/column'
import DataTableCell from '@salesforce/design-system-react/components/data-table/cell'
import IconSettings from '@salesforce/design-system-react/components/icon-settings'

export default function EODataTable(props: any) {
  return (
    <IconSettings iconPath="/assets/icons">
      <div style={{ overflow: 'auto' }}>
        <h3 className="slds-text-heading_medium slds-m-vertical_medium">
          {props.tableTitle}
        </h3>
        <DataTable items={props.items} id={props.tableId} striped>
          {props.columns.map((column, i) => (
            <DataTableColumn
              key={`${column.property}_${i}`}
              label={column.name}
              property={column.property}
            />
          ))}
        </DataTable>
      </div>
    </IconSettings>
  )
}
