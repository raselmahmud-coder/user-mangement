import React, { useEffect, useState } from "react";
import UserInfo from "../types/models";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [team, setTeam] = useState<UserInfo[]>([]);
  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleAddUser = (user: UserInfo) => {
    console.log("add team");
    const newTeam = [...team, user];
    setTeam(newTeam);
  };
  return (
    <div>
      <h1>My Users </h1>
      <h2>Team Size {team.length}</h2>
      {/* <User name={"rasel"} age={11} ShowUser={handleShowUser} /> */}
      {users.map((user) => (
        <User key={user.id} user={user} AddUser={handleAddUser} />
      ))}
    </div>
  );
};

export default Users;
