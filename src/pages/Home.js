import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Skeleton from "../components/Skeleton";
import Users from "../components/Users";

const Home = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const makeRequest = async () => {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=500");

      if (!response.ok) {
        setError("Not Found");
      }
      const data = await response.json();
      setUser(data.results);
      setLoading(false);
    };

    makeRequest();
  }, []);

  return (
    <div>
      <Header />
      {error && <p>{error}</p>}
      {loading ? <Skeleton /> : <Users data={user} />}
    </div>
  );
};

export default Home;
