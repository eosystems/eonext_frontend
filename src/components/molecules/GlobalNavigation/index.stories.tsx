import * as React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalNavigation from './'

import '../../../styles/entry.scss'

storiesOf('molecules/GlobalNavigation', module).add('with text', () => (
  <GlobalNavigation>Hoge</GlobalNavigation>
))
