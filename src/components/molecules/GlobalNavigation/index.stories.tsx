import * as React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalNavigation from './'

const navigationProps = {
  menus: [
    {
      title: 'Characters',
      childMenus: [
        {
          label: 'Assets',
          value: '1',
          iconCategory: 'utility',
          iconName: 'table',
          href: 'http://www.google.com'
        },
        {
          label: 'Wallet',
          value: '2',
          iconCategory: 'utility',
          iconName: 'kanban',
          href: 'http://www.google.com'
        },
        {
          label: 'WalletTransaction',
          value: '3',
          iconCategory: 'utility',
          iconName: 'side_list',
          href: 'http://www.google.com'
        }
      ]
    }
  ]
}

storiesOf('molecules/GlobalNavigation', module).add('default', () => (
  <GlobalNavigation {...navigationProps} />
))
