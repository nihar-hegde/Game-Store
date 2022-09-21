import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jhon Miller",
    email: "jhon@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Thor Odinson",
    email: "thor@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
