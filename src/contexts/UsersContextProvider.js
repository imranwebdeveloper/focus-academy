import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const values = {
    loading,
    users,
    setUsers,
    setLoading,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UsersContextProvider;
