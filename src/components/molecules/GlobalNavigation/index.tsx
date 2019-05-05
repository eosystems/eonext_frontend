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
  return (
    <IconSettings
      standardSprite={'static/symbols.svg'}
      utilitySprite={'static/symbols.svg'}
      actionSprite={'static/symbols.svg'}
      doctypeSprite={'static/symbols.svg'}
      customSprite={'static/symbols.svg'}
    >
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
          {props.menus.map((menu, i) => (
            <GlobalNavigationBarDropdown
              id="primaryDropdown"
              assistiveText={{ icon: 'Context Menu Item 1' }}
              label={menu.title}
              options={menu.childMenus}
            />
          ))}
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>
    </IconSettings>
  )
}
