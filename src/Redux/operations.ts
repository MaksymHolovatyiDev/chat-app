import axios from 'axios';

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {defaultUrl} from '@/environment';
import {GetChatRes, SendMessageReq, SendMessageRes} from '@/Types';

axios.defaults.baseURL = defaultUrl + '/api';

const baseQuery = fetchBaseQuery({
  baseUrl: defaultUrl + '/api',
  prepareHeaders: headers => {
    if (!headers.get('Authorization')) {
      const userData = localStorage.getItem('persist:user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        if (parsedUser?.token)
          headers.set(
            'Authorization',
            `Bearer ${JSON.parse(parsedUser?.token)}`,
          );
      }
    }

    return headers;
  },
});

export const backendAPI = createApi({
  reducerPath: 'backendAPI',
  baseQuery: baseQuery,
  endpoints: builder => ({
    GetChat: builder.query<GetChatRes, string>({
      query: id => ({
        url: `Chat/${id}`,
      }),
    }),

    SendMessage: builder.mutation<SendMessageRes, SendMessageReq>({
      query: data => ({
        url: 'Chat',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

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

export const {useGetChatQuery, useSendMessageMutation} = backendAPI;
