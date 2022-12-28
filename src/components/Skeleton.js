import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
  return (
    <div className="border rounded-md max-w-[450px] mx-auto mt-4   p-2  ">
      <ContentLoader
        speed={3}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#E2E8F0"
        className="h-64 p-2 "
        {...props}
      >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="60" rx="3" ry="3" width="275" height="240" />
        <circle cx="20" cy="20" r="20" />
      </ContentLoader>
    </div>
  );
};

export default Skeleton;
