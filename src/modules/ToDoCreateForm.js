import React, { useState, useEffect } from "react";

// Bootstrap Component
import {
  Form,
  FormGroup,
  FormLabel as Label,
  FormControl as Control,
  Image,
} from "react-bootstrap";

function ToDoCreateForm({ parentState, setParentState, edit = false }) {
  useEffect(() => {
    if (parentState && edit) {
      setTitle(parentState.title);
      setDescription(parentState.description);
      setImage(parentState.image);
      setImagePreview(URL.createObjectURL(parentState.image));
    }
  }, []);

  // State handler
  const [title, setTitle] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setParentState({
      ...parentState,
      title: e.target.value,
    });
  };
  const [description, setDescription] = useState("");
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    setParentState({
      ...parentState,
      description: e.target.value,
    });
  };
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const handleChangeImage = (e) => {
    let file = e.target.files[0] ? e.target.files[0] : null;
    if (file && !file.type.includes("image")) {
      alert("File type must be an image!");
      setImage(null);
      setParentState({
        ...parentState,
        image: null,
      });
      return;
    }
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setParentState({
      ...parentState,
      image: file,
    });
  };

  return (
    <Form>
      <FormGroup className="mb-3" controlId="title">
        <Label>Title</Label>
        <Control
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="To Do Title"
        ></Control>
      </FormGroup>
      <FormGroup className="mb-3" controlId="description">
        <Label>Description</Label>
        <Control
          as="textarea"
          rows={3}
          value={description}
          onChange={handleChangeDescription}
          placeholder="To Do Description"
        ></Control>
      </FormGroup>
      <FormGroup className="mb-3" controlId="image">
        <Label>Image</Label>
        <Control onChange={handleChangeImage} type="file"></Control>
      </FormGroup>
      {image && (
        <div>
          <Image style={{ width: "100%" }} src={imagePreview}></Image>
        </div>
      )}
    </Form>
  );
}

export default ToDoCreateForm;
