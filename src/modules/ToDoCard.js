import React from "react";

// Bootstrap Component
// import { Image } from "react-bootstrap";

// Icons
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

// Styles
import "./ToDoCard.css";

function ToDoCard({ handleClickEdit, handleClickDelete, item, index }) {
  return (
    <div className="todo-card d-flex align-items-center mb-4">
      {/* { item.text } */}
      {/* <div className="todo-image">
        <Image
          height="100px"
          src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
          alt="img"
        />
      </div> */}
      <div className="todo-content">
        <div className="content-title">{item.title}</div>
        <div className="content-description">
          {item.description.length < 130
            ? item.description
            : item.description.split("").splice(0, 130).join("") + "..."}
        </div>
      </div>
      <div className="todo-buttons d-flex">
        <AiFillEdit
          onClick={() => handleClickEdit(true, index)}
          className="todo-button edit"
        />
        <AiFillDelete
          onClick={() => handleClickDelete(true, index)}
          className="todo-button delete"
        />
      </div>
    </div>
  );
}

export default ToDoCard;
