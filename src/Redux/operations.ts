import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { defaultUrl } from '@/environment';

axios.defaults.baseURL = defaultUrl+'/api';

export const userSignIn = createAsyncThunk(
  'user/SignIn',
  async (data: {email: string; password: string}) => {
    const response = await axios.post('/Auth/SignIn', data);
    return response.data;
  },
);

export const userSignUp = createAsyncThunk(
  'user/SignUp',
  async (data: {
    email: string;
    password: string;
    name?: string;
    surname?: string;
  }) => {
    const response = await axios.post('/Auth/SignUp', data);
    return response.data;
  },
);
