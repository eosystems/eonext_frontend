import * as React from 'react'
import IconSettings from '@salesforce/design-system-react/components/icon-settings'
import GlobalNavigationBar from '@salesforce/design-system-react/components/global-navigation-bar'
import GlobalNavigationBarRegion from '@salesforce/design-system-react/components/global-navigation-bar/region'
import GlobalNavigationBarDropdown from '@salesforce/design-system-react/components/global-navigation-bar/dropdown'
import GlobalNavigationBarLink from '@salesforce/design-system-react/components/global-navigation-bar/link'

import Button from '@salesforce/design-system-react/components/button'
import Icon from '@salesforce/design-system-react/components/icon'

import AppLauncher from '@salesforce/design-system-react/components/app-launcher'
import AppLauncherSection from '@salesforce/design-system-react/components/app-launcher/section'
import AppLauncherTile from '@salesforce/design-system-react/components/app-launcher/tile'

export default function GlobalNavigation(props: any) {
  const dropdownCollection = [
    {
      label: 'Menu Item One',
      value: '1',
      iconCategory: 'utility',
      iconName: 'table',
      href: 'http://www.google.com'
    },
    {
      label: 'Menu Item Two',
      value: '2',
      iconCategory: 'utility',
      iconName: 'kanban',
      href: 'http://www.google.com'
    },
    {
      label: 'Menu Item Three',
      value: '3',
      iconCategory: 'utility',
      iconName: 'side_list',
      href: 'http://www.google.com'
    }
  ]

  return (
    <IconSettings iconPath="/assets/icons">
      <GlobalNavigationBar>
        <GlobalNavigationBarRegion region="primary">
          <AppLauncher
            triggerName="EONext"
            onSearch={() => {
              console.log('hoge')
            }}
            modalHeaderButton={<Button label="App Exchange" />}
          >
            <AppLauncherSection title="ESI関連">
              <AppLauncherTile
                title="Wallet"
                iconText="$"
                description="ESI Wallet"
              />
            </AppLauncherSection>
          </AppLauncher>
        </GlobalNavigationBarRegion>
        <GlobalNavigationBarRegion region="secondary" navigation>
          <GlobalNavigationBarLink
            href="javascript:void(0);"
            label="Home"
            id="home-link"
          />
          <GlobalNavigationBarDropdown
            id="primaryDropdown"
            assistiveText={{ icon: 'Context Menu Item 1' }}
            label="Context Menu Item"
            options={dropdownCollection}
          />
          <GlobalNavigationBarLink
            href="javascript:void(0);"
            label="Context Menu Item 2"
            active
          />
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>
    </IconSettings>
  )
}
