import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // ✅ correct
import {Login} from '../components/Login/Login';
console.log("bro",BrowserRouter)
describe('App Component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
