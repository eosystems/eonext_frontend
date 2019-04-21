import * as React from 'react'
import { storiesOf } from '@storybook/react'
import EODataTable from './'

import '../../../styles/entry.scss'

const dataTableProps = {
  tableTitle: 'Assets',
  tableID: 'assets_indivisual',
  columns: [
    {
      name: 'ID',
      property: 'id'
    },
    {
      name: 'Location',
      property: 'location'
    },
    {
      name: 'TypeName',
      property: 'type_name'
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
      group: 'Commodities'
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
      type_name: 'Netak Scrap',
      quantity: 1,
      volume: '5m',
      group: 'Commodities'
    },
    {
      id: '6',
      location: 'Abudban IV',
      type_id: 34,
      type_name: 'Netak Scrap',
      quantity: 1,
      volume: '5m',
      group: 'Commodities'
    }
  ]
}

storiesOf('molecules/EODataTable', module).add('default', () => (
  <EODataTable {...dataTableProps} />
))
