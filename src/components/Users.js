import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import Spinner from "./Spinner";

const Users = ({ data }) => {
  const [items, setItem] = useState(data.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);
  const fetchData = () => {
    setTimeout(() => {
      setItem((item) => [
        ...item,
        ...data.slice(item.length, item.length + 10),
      ]);
    }, 1500);
    if (data.length === items.length) {
      setHasMore(false);
    }
  };

  return (
    <div className="container max-w-[450px] mx-auto my-8 ">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "12px" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-col gap-2">
          {items.map((user, i) => {
            return <Card key={i} user={user} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Users;
