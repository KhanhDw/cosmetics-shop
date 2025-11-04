// Currently disabled due to import issues with ES modules
// Only enable why-did-you-render in development
// if (process.env.NODE_ENV === 'development') {
//   import('why-did-you-render').then((lib) => {
//     const React = require('react');  // This approach doesn't work well with Vite/ES modules
//     const whyDidYouRender = lib.default || lib;
//     if (typeof whyDidYouRender === 'function') {
//       whyDidYouRender(React, {
//         trackAllPureComponents: true,
//         trackExtraHooks: [
//           // Track custom hooks if needed
//         ],
//         collapseGroups: true,
//         titleColor: 'green',
//         diffNameColor: 'darkturquoise',
//         diffPathColor: 'red',
//       });
//     }
//   }).catch(err => {
//     console.error('Failed to load whyDidYouRender:', err);
//   });
// }