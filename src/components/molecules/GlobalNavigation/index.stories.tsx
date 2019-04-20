import * as React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalNavigation from './'

storiesOf('molecules/GlobakNavigation', module).add('with text', () => (
  <GlobalNavigation>Hoge</GlobalNavigation>
))
