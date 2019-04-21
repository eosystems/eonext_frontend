import * as React from 'react'
import { storiesOf } from '@storybook/react'
import EODataTable from './'

import '../../../styles/entry.scss'

const dataTableProps = {
  tableTitle: 'Assets',
  tableID: 'assets_indivisual',
  handleSort: e => {
    console.log(e.property + '/' + e.sortDirection)
  },
  columns: [
    {
      name: 'ID',
      property: 'id',
      isSort: true
    },
    {
      name: 'Location',
      property: 'location',
      isSort: true
    },
    {
      name: 'TypeName',
      property: 'type_name'
    },
    {
      name: 'Source',
      property: 'pack_source'
    },
    {
      name: 'Quantity',
      property: 'quantity'
    },
    {
      name: 'Volume',
      property: 'volume'
    },
    {
      name: 'Group',
      property: 'group'
    }
  ],
  items: [
    {
      id: '1',
      location: 'Abudban IV',
      type_id: 34,
      type_name: 'Netak Scrap',
      quantity: 1,
      volume: '5m',
      group: 'Commodities',
      pack_source: 'セーフボックス001(ID:1)'
    },
    {
      id: '2',
      location: 'Abudban IV',
      type_id: 34,
      type_name: 'Netak Scrap',
      quantity: 1,
      volume: '5m',
      group: 'Commodities'
    },
    {
      id: '3',
      location: 'Abudban IV',
      type_id: 34,
      type_name: 'Netak Scrap',
      quantity: 1,
      volume: '5m',
      group: 'Commodities'
    },
    {
      id: '4',
      location: 'Abudban IV',
      type_id: 34,
      type_name: 'Netak Scrap',
      quantity: 1,
      volume: '5m',
      group: 'Commodities'
    },
    {
      id: '5',
      location: 'Abudban IV',
      type_id: 34,
      type_name: 'セーフボックス001',
      quantity: 1,
      volume: '5m',
      group: 'Miscellaneous'
    },
    {
      id: '6',
      location: 'Abudban IV',
      type_id: 34,
      type_name: 'Netak Scrap',
      quantity: 1,
      volume: '5m',
      group: 'Commodities',
      pack_source: 'セーフボックス001(ID:1)'
    }
  ]
}

storiesOf('molecules/EODataTable', module).add('default', () => (
  <EODataTable {...dataTableProps} />
))
