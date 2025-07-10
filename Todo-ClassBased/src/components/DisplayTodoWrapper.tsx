// import React from "react";
import { useSearchParams } from "react-router-dom";
import DisplayTodo from "./DisplayTodo";

const DisplayTodoWrapper = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id") || undefined;
  return <DisplayTodo id={id} />;
};

export default DisplayTodoWrapper;