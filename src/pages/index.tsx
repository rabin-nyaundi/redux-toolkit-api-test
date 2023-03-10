import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { getUsers } from "../store/api/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

const selectedUsers = (state: any) => state.users;

export default function Home() {
  const { data, isLoading } = useSelector(selectedUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(getUsers());
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full justify-center items-center text-center p-16">
        <p className="text-xl">Loading... Please wait!</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Touch Inspiration</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full justify-center items-center m-auto overflow-hidden">
        <Link href={"/users"} >
          <button className="rounded-xl border px-8 py-2 bg-blue-800 text-white">View Users</button>
        </Link>
      </main>
    </>
  );
}
