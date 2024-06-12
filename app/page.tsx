"use client";

import Button from "./components/Button";
import RegisterUser from "./components/RegisterUser";
import ChatPage from "./components/ChatPage";

import { useData } from "@/providers/DataProvider";

import { PacmanLoader } from "react-spinners";
import { signIn } from "./utils/databasefunctions";
import { checkUser } from "./utils/filterfunctions";

import { useState, useEffect } from "react";

const Home = () => {
  const [isUserLoaded, setIsUserLoaded] = useState<boolean | null>(null);
  const [isUserRegistered, setIsUserRegistered] = useState<boolean | null>(
    null
  );

  const { user, users, chats } = useData();

  useEffect(() => {
    const registerStatus = checkUser(user?.uid, users);

    if (user !== undefined && users !== undefined) {
      setIsUserRegistered(registerStatus);
      setIsUserLoaded(Boolean(user));
    } else if (user === null) {
      setIsUserRegistered(false);
      setIsUserLoaded(false);
    }
  }, [user, users]);

  if (isUserLoaded === null || isUserRegistered === null) {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <PacmanLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div>
      <section>
        {isUserLoaded && isUserRegistered ? (
          <ChatPage user={user} chats={chats} users={users} />
        ) : isUserLoaded ? (
          <RegisterUser />
        ) : (
          <div className="flex justify-center items-center h-[100vh]">
            <Button onClick={signIn}>Sign Up</Button>{" "}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
