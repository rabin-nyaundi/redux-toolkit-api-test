import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table";
import { getUsers } from "../../store/api/users";

const selectedUsers = (state: any) => state.users;

export default function index() {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector(selectedUsers);

//   if (!users) {
//     dispatch(getUsers());
//   }

  const tableHeaders = [
    { id: 1, title: "Name" },
    { id: 2, title: "Email" },
    { id: 3, title: "Bio" },
    { id: 4, title: "Occupation" },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-center p-16">
        <p className="text-xl">Loading... Please wait!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center m-auto w-full bg-gray-300 text-lg">
      {users && <Table tableHeaders={tableHeaders} users={users[0]} idx={1} />}
    </div>
  );
}
