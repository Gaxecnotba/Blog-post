"use client";
import { createnewPost } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    title: "",
    auth: "",
    date: "",
    description: "",
  });

  const router = useRouter();

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async () => {
    console.log("enviando");
    await createnewPost(
      formData.title,
      formData.auth,
      formData.date,
      formData.description
    );
    console.log("Post Created");
  };

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
          name="title"
          type="text"
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
          onChange={handleInputChange}
          value={formData.title}
        />
        <label htmlFor="auth" className="text-slate-500 mb-2 block text-lg">
          Author
        </label>
        <input
          id="auth"
          type="text"
          name="auth"
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
          onChange={handleInputChange}
          value={formData.auth}
        />
        <label htmlFor="date" className="text-slate-500 mb-2 block text-lg">
          Date
        </label>
        <input
          id="date"
          type="text"
          name="date"
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
          onChange={handleInputChange}
          value={formData.date}
        />
        <label
          htmlFor="description"
          className="text-slate-500 mb-2 block text-lg"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="bg-slate-900 text-slate-300 w-full"
          onChange={handleInputChange}
          value={formData.description}
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
