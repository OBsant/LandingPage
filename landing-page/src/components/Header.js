import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-gradient">
        <div className="itens">
          <h1>Escape to Paradise with Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            suscipit iaculis sem, non commodo mi luctus non. Nam malesuada dolor
            id dui tempor, et suscipit odio scelerisque.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
