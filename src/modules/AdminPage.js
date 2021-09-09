import React, { useState } from "react";

// Components
import UserCard from "./UserCard";

import "./AdminPage.css";

function AdminPage() {
  const [users, setUsers] = useState([
    {
      username: "Sofia123",
      email: "sofia123@mail.com",
      image:
        "https://cdn.pixabay.com/photo/2015/10/12/15/10/woman-984246_960_720.jpg",
    },
    {
      username: "Cindyx04",
      email: "cindy@mail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/06/30/08/37/suitcase-1488516_960_720.jpg",
    },
    {
      username: "Alexandra907",
      email: "alex907@mail.com",
      image:
        "https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_960_720.jpg",
    },
    {
      username: "Tom777y",
      email: "tommy@mail.com",
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/18/21/floating-1854203_960_720.jpg",
    },
  ]);

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <div className="user-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Users List</h4>
      </div>
      <div className="user-items mt-4">
        {users.length === 0 && <div>No users!</div>}
        {users.map((item, index) => (
          <UserCard key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
