import * as React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalNavigation from 'src/components/molecules/GlobalNavigation'

storiesOf('molecules/GlobakNavigation', module).add('with text', () => (
  <GlobalNavigation>Hoge</GlobalNavigation>
))
