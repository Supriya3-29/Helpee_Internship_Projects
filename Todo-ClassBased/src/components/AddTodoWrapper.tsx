// components/AddTodoWrapper.tsx
// import React from "react";
import { useNavigate } from "react-router-dom";
import AddTodo from "./AddTodo";

const AddTodoWrapper = () => {
  const navigate = useNavigate();
  return <AddTodo navigate={navigate} />;
};

export default AddTodoWrapper;
