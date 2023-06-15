import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Rehan Ali ',
    email: 'dev.rayhan98@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Charandeep Singh ',
    email: 'charandeep1906@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Anshika Sharma',
    email: 'anshika252825@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sawan Kumar',
    email: 'sawan1997@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
