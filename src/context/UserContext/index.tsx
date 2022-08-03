import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";

interface UserContextInterfaceObject {
  email: string;
  isActive: boolean | null;
  name: string;
  profile: string;
  userId: string;
  userName: string;
  token: string;
  photoBase64: string;
}

interface UserContextInterface {
  user: UserContextInterfaceObject;
  setUser: Dispatch<SetStateAction<UserContextInterfaceObject>>;
}

interface Props {
  children: JSX.Element;
}

export const UserContext = React.createContext<UserContextInterface>({
  user: {
    email: "",
    isActive: null,
    name: "",
    profile: "",
    userId: "",
    userName: "",
    token: "",
    photoBase64: "",
  },
  setUser: () => {},
});

export const UserProvider = (props: Props) => {
  const [user, setUser] = React.useState<UserContextInterfaceObject>({
    email: "",
    isActive: null,
    name: "",
    profile: "",
    userId: "",
    userName: "",
    token: "",
    photoBase64: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data !== "undefined") {
      setUser(JSON.parse(localStorage.getItem("user")!));
    }
  }, []);

  useEffect(() => {
    if (user?.email) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  return {
    user,
    setUser,
  };
}
export type { UserContextInterfaceObject };
