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

const svgRoute = 'src/assets/';

export const navigationData = [
  {text: 'Home', route: MainRoutes.Home, img: svgRoute + 'grid.svg'},
  {text: 'Chat', route: MainRoutes.Chat, img: svgRoute + 'chat.svg'},
  {text: 'Contact', route: MainRoutes.Contact, img: svgRoute + 'person.svg'},
  {
    text: 'Notifications',
    route: MainRoutes.Notifications,
    img: svgRoute + 'bell.svg',
  },
  {
    text: 'Calendar',
    route: MainRoutes.Calendar,
    img: svgRoute + 'calendar.svg',
  },
  {
    text: 'Settings',
    route: MainRoutes.Settings,
    img: svgRoute + 'settings.svg',
  },
];
