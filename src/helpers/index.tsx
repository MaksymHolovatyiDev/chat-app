import {ReactNode} from 'react';
import {store} from '@/Redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

export const TestWrapper = ({children}: {children: ReactNode}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export const link = 'http://localhost:5173';
