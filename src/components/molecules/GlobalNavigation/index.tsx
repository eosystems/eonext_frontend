import * as React from 'react'
import GlobalNavigationBar from '@salesforce/design-system-react/components/global-navigation-bar'
import GlobalNavigationBarRegion from '@salesforce/design-system-react/components/global-navigation-bar/region'
import GlobalNavigationBarLink from '@salesforce/design-system-react/components/global-navigation-bar/link'
import { Button } from '@salesforce/design-system-react'

export default function GlobalNavigation(props: any) {
  return (
    <div className="global-navigation__test">
      <Button label="Hello Button" />
    </div>
  )
}
