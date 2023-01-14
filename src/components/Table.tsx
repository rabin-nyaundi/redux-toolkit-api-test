import Link from "next/link";
import React from "react";
import { User } from "../store/features/users/usersSlice";

export interface TableHeaders {
  id: number;
  title: string;
  onClickEdit: Function;
}
export default function Table({
  tableHeaders,
  users,
  idx,
}: {
  tableHeaders: any;
  users: any;
  idx: number;
}) {
  return (
    <div className="flex lg:w-5/6 w-full lg:p-10 p-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              {tableHeaders?.map((header: TableHeaders, key: TableHeaders) => (
                <th key={key.id} scope="col" className="px-6 py-3">
                  {header.title}
                </th>
              ))}

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: User, key: User) => (
              <tr
                key={key._id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="px-6 py-4">{idx++}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.bio}</td>
                <td className="px-6 py-4">{user.occupation}</td>
                <td className="px-6 py-4">
                  <Link href="/users/[id]" as={`/users/${user?._id}`}>
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
