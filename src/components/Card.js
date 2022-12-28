import React from "react";

const Card = ({ user }) => {
  return (
    <div className="border rounded-md  ">
      <div className="flex gap-2 p-2  items-center  ">
        <div className="">
          <img
            src={user.picture.thumbnail}
            alt=""
            className="rounded-full border-4"
          />
        </div>
        <div className="flex flex-col justify-center ">
          <p className="leading-5">{`${user.name.title} ${user.name.first} ${user.name.last} `}</p>
          <small>{user.location.country}</small>
        </div>
      </div>
      <div className="h-60 bg-slate-200"></div>
    </div>
  );
};

export default Card;
