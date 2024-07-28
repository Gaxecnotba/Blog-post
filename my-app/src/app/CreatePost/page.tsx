"use client";
import SavePost from "@/ui/CreatePost/create-post";
import { useState } from "react";
import { news as originalNews } from "@/lib/new";
import NewCard from "@/components/Cards/NewCard";
export default function CreatePost() {
  const [news, setNews] = useState(originalNews);
  const handleAddedNews = (newPost: {
    id: string;
    auth: string;
    date: string;
    description: string;
    title: string;
    story: string;
  }) => {
    setNews([...news, newPost]);
  };
  return (
    <>
      <SavePost onSave={handleAddedNews} />
    </>
  );
}
