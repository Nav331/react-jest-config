import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/createSlice/LoginSlice';
import { Login } from '../components/Login/Login';

describe('Login Component', () => {
  it('renders correctly', () => {
    const store = configureStore({ reducer: { user: userReducer } });

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
  it("renders the username input field", () => {
    const store = configureStore({ reducer: { user: userReducer } });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const inputPlaceholderUserName = screen.getByPlaceholderText("username");
    expect(inputPlaceholderUserName).toBeInTheDocument();

    const inputPlaceholderPassword=screen.getByPlaceholderText("password")
    expect(inputPlaceholderPassword).toBeInTheDocument()
 
     const inputLabelText=screen.getByText("USERNAME")
     expect(inputLabelText).toBeInTheDocument()
  });
  
});
