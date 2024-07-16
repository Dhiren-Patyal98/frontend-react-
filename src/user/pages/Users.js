import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "ul",
      name: "Dhiren Patyal",
      image:
        "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      places: "3",
    },
  ]; 
  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
}
