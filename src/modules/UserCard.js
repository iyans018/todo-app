import React from "react";

// Bootstrap Component
import { Image } from "react-bootstrap";

// Icons
import { AiFillEdit } from "react-icons/ai";

// Styles
import "./UserCard.css";

function UserCard({ item }) {
  return (
    <div className="user-card d-flex align-items-center mb-4">
      <div className="user-image">
        <Image
          height="100%"
          src={item.image}
          alt="img"
        />
      </div>
      <div className="user-content">
        <div className="content-title">{item.username}</div>
        <div className="content-description">
          {item.email.length < 130
            ? item.email
            : item.email.split("").splice(0, 130).join("") + "..."}
        </div>
      </div>
      <div className="user-buttons d-flex">
        <AiFillEdit
          className="user-button edit"
        />
      </div>
    </div>
  );
}

export default UserCard;
