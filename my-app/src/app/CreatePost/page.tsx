"use client";
import { useState } from "react";

export default function CreateCard() {
  const [card, setCard] = useState({
    id: "",
    title: "",
    date: "",
    description: "",
    auth: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Card created:", card);
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex justify-center items-center">
      <h1 className="text-slate-200 font-bold text-4xl mb-4 p-2">
        Create Card
      </h1>
      <form className="w-1/4">
        <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={card.title}
          onChange={handleInputChange}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
          Date
        </label>
        <input
          type="text"
          name="date"
          value={card.date}
          onChange={handleInputChange}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        <div>
          <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
            Description
          </label>
          <textarea
            name="description"
            value={card.description}
            onChange={handleInputChange}
            className=" bg-slate-900 text-slate-300 w-full bg-contain"
          />
        </div>
        <label htmlFor="title" className="text-slate-500  mb-2 block text-lg">
          Author
        </label>
        <textarea
          name="auth"
          value={card.auth}
          onChange={handleInputChange}
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
