import React from 'react';
import { Provider } from 'react-redux';
import store from './src/state/store';

require("prismjs/themes/prism-okaidia.css")

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
