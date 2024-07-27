"use client";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [auth, setAuth] = useState("");
  const handleonSubmit = (e: {
    target: { name: any; value: any };
    prevenDefault: () => void;
  }) => {
    const { name, value } = e.target;
    e.prevenDefault();
    const newPost = {
      id: Date.now().toString(),
      title,
      date,
      description,
      auth,
    };
    setTitle("");
    setDate("");
    setDescription("");
    setAuth("");
  };

  const handleSave = () => {
    console.log("Card created:");
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex justify-center items-center">
      <h1 className="text-slate-200 font-bold text-4xl mb-4 p-2">
        Create Card
      </h1>
      <form className="w-1/4" onSubmit={handleonSubmit}>
        <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
          required
        />
        <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
          Date
        </label>
        <input
          type="text"
          name="date"
          value={date}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <div>
          <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
            Description
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className=" bg-slate-900 text-slate-300 w-full bg-contain"
          />
        </div>
        <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
          Author
        </label>
        <textarea
          name="auth"
          value={auth}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" bg-slate-900 text-slate-300 w-full"
        />
        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-blue-500  text-white p-3 rounded-lg mt-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
