import React, { useState } from "react";

// Bootstrap Component
import { Button } from "react-bootstrap";

// Components
import ToDoCard from "../modules/ToDoCard";
import ToDoCreateForm from "../modules/ToDoCreateForm";
import BaseDialog from "../components/BaseDialog";

export default function UserDashboard() {
  // To do handler
  const [todos, setTodos] = useState([]); // Get initial state from redux if needed

  // Dialog add handler
  const [showAddDialog, setShowAddDialog] = useState(false);
  const handleClickAddShowDialog = (show) => {
    setShowAddDialog(show);
  };
  const handleClickSaveToDo = () => {
    if (toDoAddStates.title === "") {
      alert("Title must not be empty!");
      return;
    }
    if (toDoAddStates.description === "") {
      alert("Description must not be empty!");
      return;
    }
    if (!toDoAddStates.image) {
      alert("Image must not be empty!");
      return;
    }
    setTodos([...todos, toDoAddStates]); // Change to redux set state if needed
    setToDoAddStates({
      title: "",
      description: "",
      image: null,
    });
    setShowAddDialog(false);
  };

  const [toDoAddStates, setToDoAddStates] = useState({
    title: "",
    description: "",
    image: null,
  });

  // Dialog edit handler
  const [showEditDialog, setShowEditDialog] = useState(false);
  const handleClickEditShowDialog = (show, index = null) => {
    setShowEditDialog(show);
    settoDoEditIndex(index);
    settoDoEditStates(todos[index]);
  };

  const handleClickEditToDo = () => {
    setShowEditDialog(false);
    settoDoEditIndex(null);
    setTodos(
      todos.map((item, index) => {
        if (index === toDoEditIndex) {
          return toDoEditStates;
        }
        return item;
      })
    );
    settoDoEditStates({
      title: "",
      description: "",
      image: null,
    });
  };

  const [toDoEditIndex, settoDoEditIndex] = useState(null);
  const [toDoEditStates, settoDoEditStates] = useState({
    title: "",
    description: "",
    image: null,
  });

  // Dialog delete handler
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const handleClickDeleteShowDialog = (show, index = null) => {
    setShowDeleteDialog(show);
    settoDoDeleteIndex(index);
  };

  const handleClickDeleteToDo = () => {
    setShowDeleteDialog(false);
    settoDoDeleteIndex(null);
    setTodos(
      todos.filter((item, index) => {
        return index !== toDoDeleteIndex;
      })
    );
  };

  const [toDoDeleteIndex, settoDoDeleteIndex] = useState(null);

  return (
    <div
      className="container"
      style={{
        marginTop: "150px",
        marginBottom: "80px",
        minHeight: "calc(100vh - 84px - 150px - 80px)",
      }}
    >
      <div className="todo-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">To Do</h4>
        <div>
          <Button
            variant="danger"
            onClick={() => handleClickAddShowDialog(true)}
          >
            Add New
          </Button>
        </div>
      </div>
      <div className={`todo-items ${todos.length === 0 ? "mt-4" : "mt-5"}`}>
        {todos.length === 0 && <div>No todos left</div>}
        {todos.map((item, index) => (
          <ToDoCard
            handleClickEdit={handleClickEditShowDialog}
            handleClickDelete={handleClickDeleteShowDialog}
            key={index}
            index={index}
            item={item}
          />
        ))}
      </div>
      <BaseDialog
        title="Add New To Do"
        className="add-dialog"
        show={showAddDialog}
        setShow={handleClickAddShowDialog}
        enableFooter
        onClickSaveButton={handleClickSaveToDo}
        saveButtonText="Add"
      >
        <ToDoCreateForm
          parentState={toDoAddStates}
          setParentState={setToDoAddStates}
        />
      </BaseDialog>
      <BaseDialog
        title="Edit To Do"
        className="edit-dialog"
        show={showEditDialog}
        setShow={handleClickEditShowDialog}
        enableFooter
        onClickSaveButton={handleClickEditToDo}
      >
        <ToDoCreateForm
          parentState={toDoEditStates}
          setParentState={settoDoEditStates}
          edit
        />
      </BaseDialog>
      <BaseDialog
        title="Delete To Do"
        className="delete-dialog"
        show={showDeleteDialog}
        setShow={handleClickDeleteShowDialog}
        enableFooter
        onClickSaveButton={handleClickDeleteToDo}
        saveButtonText="Delete"
      >
        <div>Apakah anda yakin ingin menghapus to do?</div>
      </BaseDialog>
    </div>
  );
}
