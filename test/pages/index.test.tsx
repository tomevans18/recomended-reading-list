import React from 'react';
import Home from '@pages/index';
import { render } from '@test/test-util';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />, {});
    expect(container).toMatchSnapshot();
  });
});
