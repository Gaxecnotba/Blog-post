"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

interface SavePostProps {
  onSave: (newPost: {
    id: string;
    title: string;
    date: string;
    description: string;
    auth: string;
    story: string;
  }) => void;
}

export default function SavePost({ onSave }: SavePostProps) {
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = handleSubmit((data) => {
    const newPost = {
      id: Date.now().toString(),
      title: data.title,
      date: data.date,
      description: data.description,
      auth: data.auth,
      story: data.story,
    };
    onSave(newPost);
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
          {...register("title")}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
          required
        />
        <label htmlFor="date" className="text-slate-500 mb-2 block text-lg">
          Date
        </label>
        <input
          id="date"
          type="text"
          {...register("date")}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <label
          htmlFor="description"
          className="text-slate-500 mb-2 block text-lg"
        >
          Description
        </label>
        <textarea
          {...register("description")}
          className="bg-slate-900 text-slate-300 w-full bg-contain"
        />
        <label htmlFor="auth" className="text-slate-500 mb-2 block text-lg">
          Author
        </label>
        <textarea
          id="auth"
          {...register("auth")}
          className="bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="story" className="text-slate-500 mb-2 block text-lg">
          Story
        </label>
        <textarea
          {...register("story")}
          className="bg-slate-900 text-slate-300 w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
        >
          <Link href={"/Home"}>Save</Link>
        </button>
      </form>
    </div>
  );
}
