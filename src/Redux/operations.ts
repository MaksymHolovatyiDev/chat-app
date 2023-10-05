import axios from 'axios';

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  CreateNewChatReq,
  FindByMessageProps,
  GetChatRes,
  Message,
  SendMessageRes,
  UpdateMessageReq,
  UsersData,
} from '@/Types';

const defaultUrl = import.meta.env.VITE_DEFAULT_URL;

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

    SendMessage: builder.mutation<SendMessageRes, any>({
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

    FindByMessage: builder.query<FindByMessageProps[], string>({
      query: text => ({
        url: `Chat/message/${text}`,
      }),
    }),

    UpdateMessage: builder.mutation<Message, UpdateMessageReq>({
      query: body => ({
        url: 'Message',
        method: 'POST',
        body,
      }),
    }),

    DeleteMessage: builder.query<Message, string>({
      query: id => ({
        url: `Message/${id}`,
        method: 'DELETE',
      }),
    }),

    getMessageImage: builder.query<any, string>({
      query: id => ({
        url: `Message/image/${id}`,
        responseHandler: 'content-type',
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
  useGetAllUsersQuery,
  useLazyGetChatByIdQuery,
  useLazyGetChatsQuery,
  useLazyFindByMessageQuery,
  useLazyDeleteMessageQuery,
  useLazyGetMessageImageQuery,
  useSendMessageMutation,
  useCreateNewChatMutation,
  useUpdateMessageMutation,
} = backendAPI;
