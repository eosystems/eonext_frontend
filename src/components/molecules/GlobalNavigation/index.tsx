import * as React from 'react'
import styled, { css } from 'styled-components'
import GlobalNavigationBar from '@salesforce/design-system-react/components/global-navigation-bar'
import GlobalNavigationBarRegion from '@salesforce/design-system-react/components/global-navigation-bar/region'
import GlobalNavigationBarLink from '@salesforce/design-system-react/components/global-navigation-bar/link'

export default function GlobalNavigation(props: any) {
  return (
    <GlobalNavigationBar>
      <GlobalNavigationBarRegion region="primary">
        <GlobalNavigationBarLink
          href="javascript:void(0);"
          label="Home"
          id="home-link"
        />
      </GlobalNavigationBarRegion>
    </GlobalNavigationBar>
  )
}
