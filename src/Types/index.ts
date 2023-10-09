export interface Message {
  _id: string;
  text: string;
  owner: any;
  createdAt: string;
  delivered: boolean;
  read: string[];
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
  chatMessage: Message[];
  users: UsersData[];
  unreadMessages: number;
  chatName: string;
}

export interface GetChatByIdRes extends GetChatRes {
  messages: Message[];
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
  lastOnline: string | null;
  selected?: boolean;
}

export interface CreateNewChatReq {
  chatUsersId: string[];
  chatName?: string;
}

export interface ChatsListProps {
  findMessageData: FindByMessageProps[] | [] | undefined;
}

export interface ChatListItemProps {
  users: {
    fullName: string;
    _id: string;
    socketId: string | null;
    updatedAt: string;
  }[];
  chatName: string | undefined;
  chatMessage: {
    text: string;
    owner: string;
    createdAt: string;
  }[];
  unreadMessages: number;
  _id: string;
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

export interface CreateUserChatProps {
  usersList: UsersData[] | undefined;
  usersListSuccess: boolean;
  isError: boolean;
  createChat: any;
}

export interface CreateGroupChatProps
  extends Pick<
    CreateUserChatProps,
    'createChat' | 'usersList' | 'usersListSuccess'
  > {}
