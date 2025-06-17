import React from 'react';
import { render,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/createSlice/LoginSlice';

describe('App Component', () => {
  const store = configureStore({ reducer: { user: userReducer } });

  it('should match snapshot', () => {
    const { container } = render(
      <Provider store={store}>
          <App />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
