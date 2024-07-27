"use client";

import { useRouter } from "next/navigation";
import Cards from "@/components/Cards/Cards";
import { news as originalNews } from "@/lib/new";
import { useState } from "react";

// const Cards= dynamic(()=> require('@/components/Cards/Cards'))

export default function HomePage() {
  const router = useRouter();
  const [news, setNews] = useState(originalNews);
  const handleEditClick = (id: string) => {
    router.push(`/View/${id}`);
  };
  const handleAddedNews = (newPost: {
    id: string;
    auth: string;
    date: string;
    description: string;
    title: string;
  }) => {
    setNews([...news, newPost]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cards news={originalNews} onEditClick={handleEditClick} />
    </main>
  );
}
