import React, { useState } from "react";

export const Post = ({ id, title, body, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    onEdit(id, e.target.title.value);
    onEdit(id, e.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Title" name="title" defaultValue={title} />
          <input placeholder="Body" name="body" defaultValue={body} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="post">
          <span className="post-title">{title}</span>
          <span className="post-body">{body}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};


