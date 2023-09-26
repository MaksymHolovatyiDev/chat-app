import {Message} from '@/Types';

export function MainChatListItem({
  data,
  userId,
}: {
  data: Message;
  userId: string;
}) {
  return (
    <>
      {data.user !== userId && (
        <img
          className="main-chat__image"
          src="src/assets/user.webp"
          alt="User avatar."
        />
      )}
      <p
        className={`chat__text ${
          data.user === userId ? 'main-chat__your-text' : 'main-chat__user-text'
        }`}>
        {data.text}
      </p>
    </>
  );
}
