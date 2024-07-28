"use client";

import { useRouter } from "next/navigation";
import Cards from "@/components/Cards/Cards";
import { news as originalNews } from "@/lib/new";
import { useState } from "react";
import { useSession } from "next-auth/react";
import SavePost from "@/ui/CreatePost/create-post";

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [news, setNews] = useState(originalNews);
  const handleEditClick = (id: string) => {
    if (session) {
      router.push(`/View/${id}`);
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cards news={originalNews} onEditClick={handleEditClick} />
    </main>
  );
}
