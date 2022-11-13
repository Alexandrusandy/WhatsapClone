const defaultChat = [
  {
    id: 0,
    user: {
      image:
        'https://media-exp1.licdn.com/dms/image/C5603AQHHM_FIsFS5mQ/profile-displayphoto-shrink_800_800/0/1649858393458?e=1673481600&v=beta&t=J_5iVySH2ZXYlnyDc-WTnNCeLwJa4nT5losGXWZa0X4',
      name: 'Alex',
    },
    lastMessage: {
      text: 'Oke',
      createdAt: '2022-11-11T09:09:00+02:00',
    },
    messages: [
      {
        me: 'how are you',
        time: '2022-11-11T09:09:00+02:00',
      },
      {
        him: 'great thanks',
        time: '2022-11-11T09:09:00+02:00',
      },
    ],
  },
  {
    id: 1,
    user: {
      image:
        'https://cdn.pixabay.com/photo/2021/04/25/14/30/man-6206540_1280.jpg',
      name: 'John',
    },
    lastMessage: {
      text: '',
      createdAt: '',
    },
    messages: [],
  },
];

const newUser = {
  id: '',
  user: {
    image:
      'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg',
    name: 'contactName',
  },
  lastMessage: {
    text: '',
    createdAt: '',
  },
  messages: [],
};

let newGroup = {
  id: '',
  user: {
    image:
      'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg',
    name: '',
    persons: '',
  },
  lastMessage: {
    text: '',
    createdAt: '',
  },
  messages: [],
};
export {defaultChat, newUser, newGroup};
