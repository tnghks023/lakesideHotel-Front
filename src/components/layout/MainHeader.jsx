import React from "react";

const MainHeader = () => {
  return (
    <header className="header-banner">
      <div className="overlay"></div>
      <div className="animated-texts overlay-content text-center">
        <h1>
          Welcome to <span className="hotel-color">lakeSide Hotel</span>
        </h1>
        <h4>
          Enjoy spacious, elegantly designed rooms with breathtaking lake views
        </h4>
      </div>
    </header>
  );
};

export default MainHeader;
