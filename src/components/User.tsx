import React, { FC } from "react";
import UserInfo from "../types/models";

// interface Info {
//   name: string;
//   age: number;
//   ShowUser: () => void;
// }

interface Info {
  user: UserInfo;
  AddUser: (user:UserInfo) => void;
}
const User: FC<Info> = ({ user, AddUser: ShowUser }) => {
   
  return (
    <div>
      <h4>user id {user.id}</h4>
      <h1>User name {user.name}</h1>
      <h1>User email {user.email}</h1>
      <h1>User userName {user.userName}</h1>
      <button onClick={()=>ShowUser(user)}>click me</button>
    </div>
  );
};

export default User;
