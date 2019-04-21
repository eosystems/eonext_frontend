import { configure } from '@storybook/react';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/components", true, /.stories.(ts|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);