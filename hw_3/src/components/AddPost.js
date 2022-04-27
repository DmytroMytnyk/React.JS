import React from "react";

export const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value, e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add Post</h3>
      <input placeholder="Title" name="title" />
      <input placeholder="Body" name="body" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};

