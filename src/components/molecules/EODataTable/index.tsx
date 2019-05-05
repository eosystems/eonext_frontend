import * as React from 'react'
import DataTable from '@salesforce/design-system-react/components/data-table'
import DataTableColumn from '@salesforce/design-system-react/components/data-table/column'
import DataTableCell from '@salesforce/design-system-react/components/data-table/cell'
import IconSettings from '@salesforce/design-system-react/components/icon-settings'
import Icon from '@salesforce/design-system-react/components/icon'

export default function EODataTable(props: any) {
  return (
    <IconSettings
      standardSprite={'static/symbols.svg'}
      utilitySprite={'static/symbols.svg'}
      actionSprite={'static/symbols.svg'}
      doctypeSprite={'static/symbols.svg'}
      customSprite={'static/symbols.svg'}
    >
      <div style={{ overflow: 'auto' }}>
        <h3 className="slds-text-heading_medium slds-m-vertical_medium">
          {props.tableTitle}
        </h3>
        <div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
          <div className="slds-col_padded">
            <Icon
              assistiveText={{ label: 'Account' }}
              category="standard"
              name="account"
              size="small"
            />
          </div>
        </div>
        <DataTable
          assistiveText={{
            actionsHeader: 'actions',
            columnSort: 'sort this column',
            columnSortedAscending: 'asc',
            columnSortedDescending: 'desc',
            selectAllRows: 'all rows',
            selectRow: 'select this row'
          }}
          items={props.items}
          fixedLayout
          id={props.tableId}
          onSort={props.handleSort}
          striped
        >
          {props.columns.map((column, i) => (
            <DataTableColumn
              key={`${column.property}_${i}`}
              label={column.name}
              property={column.property}
              sortable={column.isSort}
            />
          ))}
        </DataTable>
      </div>
    </IconSettings>
  )
}
