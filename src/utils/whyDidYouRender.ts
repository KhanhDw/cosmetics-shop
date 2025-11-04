import React from 'react';

// Only enable why-did-you-render in development
if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [
      // Track custom hooks if needed
    ],
    collapseGroups: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
    diffPathColor: 'red',
  });
}