import React from 'react';
import {render} from 'react-testing-library';

import App from '/entry/app';

describe('App Component', () => {
  test('renders', () => {
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
