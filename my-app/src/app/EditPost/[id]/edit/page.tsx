"use client";

import { useEffect, useState } from "react";
import { news } from "@/lib/new";
import SavePost from "@/ui/CreatePost/create-post";

export default function EditCard({ params }: { params: { id: number } }) {
  const id: string = params.id;
  const [card, setCard] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (id) {
        const selectedCard = news.find((item) => item.id === id);
        if (selectedCard) {
          setCard(selectedCard);
        }
      } else {
        console.error("Card id not found");
      }
    } catch (e) {
      console.error(e);
      setError(true);
    }
  }, [id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Card saved:", card);
  };
  return (
    <div className="h-[calc(100vh-6rem)] flex justify-center items-center">
      <h1 className="text-slate-200 font-bold text-4xl mb-4">Edit Card</h1>
      <form className="w-1/2">
        <label htmlFor="title" className="text-slate-500  mb-2 block text-sm">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={card.title}
          onChange={handleInputChange}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="date" className="text-slate-500  mb-2 block text-sm">
          Date
        </label>
        <input
          type="text"
          name="date"
          value={card.date}
          onChange={handleInputChange}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <label
          htmlFor="description"
          className="text-slate-500  mb-2 block text-sm bg-cover"
        >
          Description
        </label>
        <textarea
          name="description"
          value={card.description}
          onChange={handleInputChange}
          className="block w-full rounded-md border-0 py-1.5 bg-slate-900 text-slate-300 resize-vertical"
        />
        <label htmlFor="auth" className="text-slate-500  mb-2 block text-sm">
          Author
        </label>
        <textarea
          name="auth"
          value={card.auth}
          onChange={handleInputChange}
          className="p-1 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full bg-cover"
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
