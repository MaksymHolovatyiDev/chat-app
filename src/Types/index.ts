export interface Message {
  _id: string;
  text: string;
  owner: string;
  createdAt: string;
  delivered: boolean;
  read: boolean;
  reply: string[];
  image: string;
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
  unreadMessages: number;
  unreadUser: string;
}

export interface SendMessageReq {
  to: string;
  message: string;
  reply: string[];
  image: any;
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

export interface CreateNewChatReq {
  chatUserId: string;
}

export interface ChatsListProps {
  findMessageData: FindByMessageProps[] | [] | undefined;
}

export interface ChatListItemProps {
  _id: string;
  user: UsersData;
  messages: {text: string; createdAt: string};
  unreadMessages?: number;
  unreadUser?: string;
}

export interface FindByMessageProps {
  _id: string;
  chatId: string;
  owner: UsersData;
  text: string;
  createdAt: string;
}

export interface UpdateMessageReq {
  messageId: string;
  text: string;
}

export interface SubmitValue {
  message: string;
}

export interface MoreOptionsButtonProps {
  text: string;
  clickFunction: any;
}
