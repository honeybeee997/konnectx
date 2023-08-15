import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loader-overlay">
      <HashLoader color="#008ddf" size={100} className="loader" />
    </div>
  );
};

export default Loading;
