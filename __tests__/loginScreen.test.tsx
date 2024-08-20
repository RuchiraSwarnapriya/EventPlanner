import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../src/redux/reducers'; // Adjust the path to your rootReducer
import LoginScreen from '../src/containers/LoginScreen';
import {login, resetUserPassword} from '../src/redux/actions/auth';

// Mock the navigation prop
const mockNavigation = {
  navigate: jest.fn(),
};

// Mock the action creators with async handling
jest.mock('../src/redux/actions/auth', () => ({
  login: jest.fn(() => async (dispatch: any) => {
    // Simulate successful login action
    dispatch({type: 'LOGIN_SUCCESS'});
  }),
  resetUserPassword: jest.fn(() => async (dispatch: any) => {
    // Simulate successful reset password action
    dispatch({type: 'RESET_PASSWORD_SUCCESS'});
  }),
}));

// Mock the icons
jest.mock('../src/assets/icons/angledArrow.svg', () => 'MockAngledArrow');
jest.mock(
  '../src/assets/icons/greyAngledArrow.svg',
  () => 'MockGreyAngledArrow',
);
jest.mock('../src/assets/icons/rightArrow.svg', () => 'MockRightArrow');
jest.mock('../src/assets/icons/email.svg', () => 'MockMailIcon');
jest.mock('../src/assets/icons/lock.svg', () => 'MockPasswordIcon');
jest.mock('../src/assets/icons/eye.svg', () => 'MockEyeIcon');

// Configure the mock store
const mockStore = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  preloadedState: {
    authorizer: {
      isLoginLoading: false,
    },
  },
});

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={mockStore}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>,
    );

    expect(getByText('Welcome')).toBeTruthy();
    expect(getByText('Welcome to your portal')).toBeTruthy();
    expect(getByPlaceholderText('Please enter your email')).toBeTruthy();
    expect(getByPlaceholderText('Please enter your password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Sign Up')).toBeTruthy();
    expect(getByText('Restore password')).toBeTruthy();
  });

  it('shows validation errors for empty fields', async () => {
    const {getByText} = render(
      <Provider store={mockStore}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>,
    );

    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(getByText('Email is required')).toBeTruthy();
      expect(getByText('Password is required')).toBeTruthy();
    });
  });

  it('calls login action on pressing login button with valid input', async () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={mockStore}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>,
    );

    fireEvent.changeText(
      getByPlaceholderText('Please enter your email'),
      'test@example.com',
    );
    fireEvent.changeText(
      getByPlaceholderText('Please enter your password'),
      'password123',
    );
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(login).toHaveBeenCalled();
      const call = login.mock.calls[0];
      expect(call[0]).toBe('test@example.com');
      expect(call[1]).toBe('password123');
    });
  });

  it('calls resetPassword action on pressing restore password button', async () => {
    const {getByText, getByPlaceholderText} = render(
      <Provider store={mockStore}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>,
    );

    fireEvent.changeText(
      getByPlaceholderText('Please enter your email'),
      'test@example.com',
    );
    fireEvent.press(getByText('Restore password'));

    await waitFor(() => {
      expect(resetUserPassword).toHaveBeenCalled();
      const call = resetUserPassword.mock.calls[0];
      expect(call[0]).toBe('test@example.com');
    });
  });

  it('navigates to sign-up screen on pressing sign-up button', () => {
    const {getByText} = render(
      <Provider store={mockStore}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>,
    );

    fireEvent.press(getByText('Sign Up'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('SignUpScreen'); // Adjust this to match the actual screen name
  });
});
