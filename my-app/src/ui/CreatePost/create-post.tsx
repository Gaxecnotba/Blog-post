import React from "react";
import { useForm } from "react-hook-form";

interface SavePostProps {
  onSave: (newPost: {
    title: string;
    auth: string;
    date: string;
    description: string;
  }) => void;
}

export default function SavePost({ onSave }: SavePostProps) {
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = handleSubmit((data) => {
    onSave({
      title: data.title,
      auth: data.auth,
      date: data.date,
      description: data.description,
    });
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <h1 className="text-slate-200 font-bold text-4xl mb-4 p-2">
        Create Card
      </h1>
      <form className="w-1/4" onSubmit={handleOnSubmit}>
        <label htmlFor="title" className="text-slate-500 mb-2 block text-lg">
          Title
        </label>
        <input
          id="title"
          type="text"
          {...register("title", { required: "Title is required" })}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="auth" className="text-slate-500 mb-2 block text-lg">
          Author
        </label>
        <input
          id="auth"
          type="text"
          {...register("auth", { required: "Author is required" })}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="date" className="text-slate-500 mb-2 block text-lg">
          Date
        </label>
        <input
          id="date"
          type="text"
          {...register("date", { required: "Date is required" })}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <label
          htmlFor="description"
          className="text-slate-500 mb-2 block text-lg"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="bg-slate-900 text-slate-300 w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
        >
          Save New Post
        </button>
      </form>
    </div>
  );
}
