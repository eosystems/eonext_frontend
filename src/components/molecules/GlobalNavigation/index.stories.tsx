import * as React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalNavigation from './'

storiesOf('molecules/GlobalNavigation', module).add('with text', () => (
  <GlobalNavigation>Hoge</GlobalNavigation>
))
