import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersRequest,
  fetchUsersFailure,
} from "../createSlice/LoginSlice";
interface User {
  username: string;
  password: string;
}
enum LoginFields {
  USERNAME = "username",
  PASSWORD = "password",
}
enum LoginErrors {
  EMPTY_USERNAME = "please enter username",
  EMPTY_PASSWORD = "please enter password",
  INVALID_CREDENTIALS = "Invalid username or password",
}
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, errorSubmit } = useSelector((state: any) => state.user);
  console.log("error", errorSubmit);
  const [user, setUser] = useState<User>({
    [LoginFields.USERNAME]: "",
    [LoginFields.PASSWORD]: "",
  });
  const [error, setError] = useState<User>({
    [LoginFields.USERNAME]: "",
    [LoginFields.PASSWORD]: "",
  });

  const username = user[LoginFields.USERNAME];
  const password = user[LoginFields.PASSWORD];

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);
  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== "") {
      setError((prevError) => ({
        ...prevError,
        [e.target.name]: "",
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "") {
      setError({ [LoginFields.USERNAME]:LoginErrors.EMPTY_USERNAME, [LoginFields.PASSWORD]: "" });
    } else {
      setError({ [LoginFields.USERNAME]:"", [LoginFields.PASSWORD] :LoginErrors.EMPTY_PASSWORD});
    }
    const userFind = users.find(
      (user: any) => username === username && password === password
    );
    if (!userFind) {
      dispatch(fetchUsersFailure(LoginErrors.INVALID_CREDENTIALS));
    }
    if (userFind) {
      localStorage.setItem("user", JSON.stringify(userFind));
      navigate("/Home");
    }
    setUser({
      [LoginFields.USERNAME]:"",
      [LoginFields.PASSWORD]:""
    });
  };
  return (
    <div className="bg-zinc-100 sm:h-screen block w-full md:flex">
      <div className="w-4/4 md:w-2/4 bg-zinc-100 flex flex-row justify-center ">
        <img
          src="./assets/Rectangle 1467 (5).png"
          alt="image"
          className="md:h-screen md:w-full rounded-full w-[500px] h-[500px] md:rounded-none mt-20 md:mt-0"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-2/4 bg-zinc-100 flex flex-col  md:mt-0 p-10 sm:p-0 md:p-0 justify-center items-center"
      >
        <div className="w-[200px] md:w-3/4 flex flex-row justify-center pt-10">
          <img src="./assets/Group 7731 (5).png" alt="img" />
        </div>
        <div className="flex flex-col justify-start  w-[100%]  px-20">
          <label htmlFor="username" className="block w-full py-2">
            USERNAME
          </label>
          <input
            id="username"
            name="username"
            placeholder="username"
            type="text"
            value={username}
            onChange={handleChangeEvent}
            className="text-lg block w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-16 md:h-[45px]"
          />
          {error.username && (
            <p className="py-4 text-red-500">{error.username}</p>
          )}
        </div>
        <div className="flex flex-col justify-start w-[100%] w-3/4 px-20">
          <label htmlFor="username" className="block w-full py-2">
            PASSWORD
          </label>
          <input
            id="password"
            name="password"
            type="text"
            placeholder="password"
            value={password}
            onChange={handleChangeEvent}
            className="text-lg block w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-16 md:h-[45px]"
          />
          {error.password && <p className="text-red-500">{error.password}</p>}
          <button
            type="submit"
            className="block mt-5 text-white text-xl rounded-md p-2 h-16 md:h-[45px] bg-blue-500"
          >
            Login
          </button>
          {errorSubmit && <p className="text-bubble-gum">{errorSubmit}</p>}
        </div>
      </form>
    </div>
  );
};
