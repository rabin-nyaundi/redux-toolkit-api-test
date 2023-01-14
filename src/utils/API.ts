import { User } from "./../store/features/users/usersSlice";
import axios from "axios";

const app = {
  endpoint: "https://touchinspiration-0ada.restdb.io/rest/sample",
};

export const ApiKey = () => {
  const apiKey = process.env.API_KEY;
  return "x-api-key " + apiKey;
};

export const getUsersAPI = async () => {
  const res = await fetch(app.endpoint, {
    method: "GET",
    headers: {
      "x-api-key": "63be7360969f06502871ad7f",
    },
  });
  return res.json();
};

// @ts-ignore
export const patch = async (id, postData) => {
  const res = await axios({
    method: "patch",
    url: app.endpoint + "/" + id,
    data: postData,
    headers: {
      "x-api-key": "63be7360969f06502871ad7f",
    },
  });

  return await res.data;
};

// { id, postData }: { id: User, postData: User }
