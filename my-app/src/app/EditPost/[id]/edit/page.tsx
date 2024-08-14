"use client";
import { useEffect, useState } from "react";
import { getById } from "@/lib/actions";
import { updatePost } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const id: number = params.id;
  interface Card {
    id: number;
    title: string;
    auth: string;
    date: string;
    description: string;
  }

  const [card, setCard] = useState<Card>({
    id: 0,
    title: "",
    auth: "",
    date: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchPost() {
      const post = getById(id);
      console.log(post);
      setCard(post as unknown as Card);
    }
    fetchPost();
  }, [id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    console.log("Card saved:", card);
    await updatePost({
      id: card.id,
      title: card.title,
      auth: card.auth,
      date: card.date,
      description: card.description,
    });
  };
  const handleonClick = async () => {
    await handleSave();
    router.push("/Home");
  };
  return (
    <div className="h-[calc(100vh-6rem)] flex justify-center items-center">
      <h1 className="text-slate-200 font-bold text-4xl mb-4">Edit Card</h1>
      <form className="w-1/2" key={card.id} onSubmit={handleSave}>
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
        <label htmlFor="auth" className="text-slate-500  mb-2 block text-sm">
          Author
        </label>
        <textarea
          name="auth"
          value={card.auth}
          onChange={handleInputChange}
          className="p-1 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full bg-cover"
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
        <button
          type="button"
          onClick={handleonClick}
          className="w-full bg-blue-500  text-white p-3 rounded-lg mt-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
