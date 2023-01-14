import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserForm from "../../components/elements/UserForm";
import { updateUsers } from "../../store/api/users";
import { User } from "../../store/features/users/usersSlice";

const selectedUsers = (state: any) => state.users;

export default function UserPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | any>();

  useEffect(() => {
    getUser();
  });
  const router = useRouter();
  const { id } = router.query;

  const { users, isLoading } = useSelector(selectedUsers);

  const getUser = () => {
    let user = users[0]?.filter((item: User) => {
      return item?._id === id;
    });

    setUser(user[0]);
  };

  const onSubmitEditForm = (data: any) => {
    console.log(data);
    // @ts-ignore
    dispatch(updateUsers({ id, data }));
    toast.success("user updated successfully");
    navigateBack();
  };

  const navigateBack = () => {
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-center p-16">
        <p className="text-xl">Loading... Please wait!</p>
      </div>
    );
  }

  return (
    <div className=" h-full w-full">
      <button className="flex rounded px-6 py-2 bg-blue-800 text-white m-4">
        <Link href={"/users"}>Back</Link>
      </button>
      <div className="justify-center items-center m-auto lg:p-10 p-3 w-full">
        {/* @ts-ignore */}
        {user && <UserForm user={user} onClickSubmit={onSubmitEditForm} />}
      </div>
    </div>
  );
}
