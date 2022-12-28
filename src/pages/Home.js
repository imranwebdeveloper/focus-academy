import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";
import Users from "../components/Users";
import { UserContext } from "../contexts/UsersContextProvider";

const Home = () => {
  const { loading, users, setUsers, setLoading } = useContext(UserContext);

  useEffect(() => {
    const makeRequest = async () => {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=500");
      const data = await response.json();
      setUsers(data.results);
      setLoading(false);
    };

    makeRequest();
  }, [setUsers, setLoading]);

  return (
    <div>
      <Header />
      {loading ? <Skeleton /> : <Users data={users} />}
    </div>
  );
};

export default Home;
