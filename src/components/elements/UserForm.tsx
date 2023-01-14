import React, { useEffect, useState } from "react";
import { User } from "../../store/features/users/usersSlice";

export default function UserForm({
  user,
  onClickSubmit,
}: {
  user: User;
  onClickSubmit: Function;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [occupation, setOccuption] = useState("");

  useEffect(() => {
    if (user) {
      // @ts-ignore
      setName(user?.name);
      // @ts-ignore
      setEmail(user?.email);
      // @ts-ignore
      setBio(user?.bio);
      // @ts-ignore
      setOccuption(user?.occupation);
    }
  }, []);

  // @ts-ignore
  if (!user || user.length <= 0) {
    return <p>Loadingg</p>;
  }

  const onSubmitForm = (e: any) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      bio: bio,
      occupation: occupation,
    };
    // console.log(data);

    onClickSubmit(data);
  };

  return (
    <div className="flex justify-center items-center lg:w-1/2 w-full">
      <form
        // @ts-ignore
        onSubmit={onSubmitForm}
        className="flex-col w-full justify-center items-center m-auto"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@site.com"
            required
            // @ts-ignore
            value={name}
            // @ts-ignore
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="teemailxt"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            // @ts-ignore
            value={email}
            onChange={(e) => {
              // @ts-ignore
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bio
          </label>
          <input
            type="text"
            id="bio"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            // @ts-ignore
            value={bio}
            onChange={(e) => {
              // @ts-ignore
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="occupation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            // @ts-ignore
            value={occupation}
            onChange={(e) => {
              // @ts-ignore
              setOccuption(e.target.value);
            }}
          />
        </div>

        <button
          // @ts-ignore
          // onClick={onSubmitForm}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
