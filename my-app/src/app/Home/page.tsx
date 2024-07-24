"use client";

import { useRouter } from "next/navigation";
import Cards from "@/components/Cards/Cards";
import { news } from "@/components/Cards/new";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const handleEditClick = (id: string) => {
    router.push(`/EditPost/${id}`);
  };
  useEffect(() => {
    if (error) {
      router.push("/Home/error");
    }
  }, [error, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cards news={news} onEditClick={handleEditClick} />
    </main>
  );
}
