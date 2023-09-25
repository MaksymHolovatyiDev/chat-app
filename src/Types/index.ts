export interface Message {
  _id: string;
  text: string;
  user: string;
}

export interface GetChatRes {
  messages: Message[];
}

export interface SendMessageReq {
  to: string;
  message: string;
}

export interface SendMessageRes {
  _id: string;
}
