import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../redux/reducers'; // Adjust this import to your project structure
import LoginScreen from './';
import {login} from '../../redux/actions/auth';

// Mock Redux store
const store = createStore(rootReducer);

jest.mock('../../redux/actions/auth', () => ({
  login: jest.fn(),
}));

describe('LoginScreen', () => {
  it('should render correctly', () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <LoginScreen navigation={{navigate: jest.fn()}} />
      </Provider>,
    );
    expect(getByText('Welcome')).toBeTruthy();
    expect(getByPlaceholderText('Please enter your email')).toBeTruthy();
    expect(getByPlaceholderText('Please enter your password')).toBeTruthy();
  });

  it('should update email and password fields on change', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <LoginScreen navigation={{navigate: jest.fn()}} />
      </Provider>,
    );
    const emailInput = getByPlaceholderText('Please enter your email');
    const passwordInput = getByPlaceholderText('Please enter your password');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('password123');
  });

  it('should show validation errors for empty fields', async () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={store}>
        <LoginScreen navigation={{navigate: jest.fn()}} />
      </Provider>,
    );
    const loginButton = getByText('Login');

    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(getByText('Email is required')).toBeTruthy();
      expect(getByText('Password is required')).toBeTruthy();
    });
  });

  it('should dispatch login action on valid form submission', async () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <LoginScreen navigation={{navigate: jest.fn()}} />
      </Provider>,
    );
    const emailInput = getByPlaceholderText('Please enter your email');
    const passwordInput = getByPlaceholderText('Please enter your password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');

    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('should navigate to Sign Up screen on Sign Up button press', () => {
    const navigate = jest.fn();
    const {getByText} = render(
      <Provider store={store}>
        <LoginScreen navigation={{navigate}} />
      </Provider>,
    );
    const signUpButton = getByText('Sign Up');

    fireEvent.press(signUpButton);

    expect(navigate).toHaveBeenCalledWith('SIGNUP_SCREEN');
  });
});
