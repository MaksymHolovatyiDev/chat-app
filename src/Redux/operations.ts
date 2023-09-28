import axios from 'axios';

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {defaultUrl} from '@/environment';
import {
  CreateNewChatReq,
  FindByMessageProps,
  GetChatRes,
  SendMessageReq,
  SendMessageRes,
  UsersData,
} from '@/Types';

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
  tagTypes: ['Chats'],
  endpoints: builder => ({
    GetChats: builder.query<GetChatRes[], void>({
      query: () => ({
        url: 'Chat',
      }),
      providesTags: ['Chats'],
    }),

    GetChatById: builder.query<GetChatRes, string>({
      query: id => ({
        url: `Chat/${id}`,
      }),
    }),

    GetAllUsers: builder.query<UsersData[], void>({
      query: () => ({
        url: 'Users',
      }),
    }),

    SendMessage: builder.mutation<SendMessageRes, SendMessageReq>({
      query: data => ({
        url: 'Chat',
        method: 'POST',
        body: data,
      }),
    }),

    CreateNewChat: builder.mutation<SendMessageRes, CreateNewChatReq>({
      query: data => ({
        url: 'Chat/create',
        method: 'POST',
        body: data,
      }),
    }),

    FindByMessage: builder.query < FindByMessageProps[], string>({
      query: (text) => ({
        url: `Chat/message/${text}`,
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

export const {
  useGetChatsQuery,
  useGetAllUsersQuery,
  useLazyGetChatByIdQuery,
  useLazyFindByMessageQuery,
  useSendMessageMutation,
  useCreateNewChatMutation,
} = backendAPI;
