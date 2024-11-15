import { connectDB, disconnectDB } from "./db";
import { IUser } from "./user.interface";
import {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUserById,
  measureQueryWithIndexes,
} from "./crudl";

export const users: IUser[] = [
  {
    username: "admin_01",
    firstName: "Alice",
    lastName: "Admin",
    email: "alice.admin@example.com",
    password: "adminPassword123",
    dob: new Date("1985-12-01"),
    address: "123 Admin St, Admin City",
    profession: "System Administrator",
    fullName: "Alice Admin",
  },
  {
    username: "user_01",
    firstName: "Bob",
    lastName: "User",
    email: "bob.user@example.com",
    password: "userPassword123",
    dob: new Date("1990-05-20"),
    address: "456 User Ave, User City",
    profession: "Software Engineer",
    fullName: "Bob User",
  },
  {
    username: "guest_01",
    firstName: "Charlie",
    lastName: "Guest",
    email: "charlie.guest@example.com",
    password: "guestPassword123",
    dob: new Date("2000-01-15"),
    address: "789 Guest Rd, Guest Town",
    profession: "None",
    fullName: "Charlie Guest",
  },
];

export const createMultipleUsers = async (users: IUser[]) => {
  try {
    const createdUsers = [];
    for (const userData of users) {
      const user = await createUser(userData);
      createdUsers.push(user);
    }
    return createdUsers;
  } catch (error) {
    throw new Error(`Error creating multiple user: ${error}`);
  }
};

const startApp = async () => {
  try {
    await connectDB();
    // const createdUsers = await createMultipleUsers(users);
    // await getUserById("113141");
    // await deleteUser("113141");
    // await updateUser("113141", { firstName: "John" });
    // await sortUserByDOB();
    // const allUsers = await getAllUsers();
    // console.log(allUsers);
    // await usersInProfession();
    // await filteredUserByProfession();
    // await filteredUserByEmail("bob.user@example.com");
    await measureQueryWithIndexes();
    disconnectDB();
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};

startApp();