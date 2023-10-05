import GridSvg from '@assets/icons/grid.svg';
import ChatSvg from '@assets/icons/chat.svg';
import PersonSvg from '@assets/icons/person.svg';
import BellSvg from '@assets/icons/bell.svg';
import CalendarSvg from '@assets/icons/calendar.svg';
import SettingsSvg from '@assets/icons/settings.svg';

export enum MainRoutes {
  SignIn = '/SignIn',
  SignUp = '/SignUp',
  Home = '/Home',
  Chat = '/Chat',
  Contact = '/Contact',
  Notifications = '/Notifications',
  Calendar = '/Calendar',
  Settings = '/Settings',
}

export const SignIn = {
  data: [
    {text: 'E-mail', type: 'email', field: 'email'},
    {text: 'Password', type: 'password', field: 'password'},
  ],
  initialValues: {email: '', password: ''},
  buttonText: 'Sign In',
};

export const SignUp = {
  data: [
    {text: 'First name', type: 'text', field: 'name'},
    {text: 'Last Name', type: 'text', field: 'surname'},
    ...SignIn.data,
  ],
  initialValues: {name: '', surname: '', ...SignIn.initialValues},
  buttonText: 'Sign Up',
};

export const navigationData = [
  {text: 'Home', route: MainRoutes.Home, img: GridSvg},
  {text: 'Chat', route: MainRoutes.Chat, img: ChatSvg},
  {text: 'Contact', route: MainRoutes.Contact, img: PersonSvg},
  {
    text: 'Notifications',
    route: MainRoutes.Notifications,
    img: BellSvg,
  },
  {
    text: 'Calendar',
    route: MainRoutes.Calendar,
    img: CalendarSvg,
  },
  {
    text: 'Settings',
    route: MainRoutes.Settings,
    img: SettingsSvg,
  },
];
