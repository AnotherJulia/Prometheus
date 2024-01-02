"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@prisma/client";
import { db } from "@/db";

type UserContextType = {
  user: User | null;
  authStatus: boolean;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  authStatus: false,
});

export function useUserContext() {
  return useContext(UserContext);
}

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const getKindeSession = async () => {
      const res = await fetch("/api/user/get")
        .then(async (res) => {
          const data = await res.json();
          setUser(data.response);
          setAuthStatus(data.authenticated);

          let userId = data.response?.id;
          // Check if this user Id is in the database
          // If not, create a new user

          let response = await db.user.findUnique({
            where: {
              id: userId,
            },
          });

          // Create a new user
          if (!response) {
            let r = await db.user.create({
              data: {
                id: userId,
                email: data.response?.email,
              },
            });
          }
        })

        .catch(() => {
          setAuthStatus(false);
          return;
        });
    };

    getKindeSession();
  }, []);

  // ALlows us to get the user's plan easily

  return (
    <UserContext.Provider
      value={{
        user,
        authStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
