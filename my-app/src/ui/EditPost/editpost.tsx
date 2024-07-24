import { useState } from "react";

export default function EditPost() {
  const [info, setInfo] = useState();

  return (
    <>
      <form action="">
        <h1>Create a new Post</h1>
        <label htmlFor="Title">Title</label>
        <input type="text" />
        <label htmlFor="Title">Date</label>
        <input type="text" />
        <label htmlFor="Title">Description</label>
        <input type="text" />
        <label htmlFor="Title">Author</label>
        <input type="text" />
        <button> Submit</button>
      </form>
    </>
  );
}
