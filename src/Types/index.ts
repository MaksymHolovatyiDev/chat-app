export interface Message {
  _id: string;
  text: string;
  user: string;
  createdAt: string;
}

export interface UsersData {
  _id: string;
  fullName: string;
  socketId: string;
  updatedAt: string;
}

export interface GetChatRes {
  _id: string;
  messages: Message[];
  users: UsersData[];
}

export interface SendMessageReq {
  to: string;
  message: string;
}

export interface SendMessageRes {
  _id: string;
}

export interface UserChatProfileProps {
  online: null | string;
  name: string;
  lastOnline: string;
  selected?: boolean;
}
