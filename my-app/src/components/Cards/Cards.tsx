"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
type NewsItem = {
  id: number;
  title: string;
  date: string;
  description: string;
  auth: string;
};

type CardsProps = {
  news: NewsItem[];
};
export default function Cards({ news }: CardsProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const handleEditClick = (id: number) => {
    if (session) {
      router.push(`/View/${id}`);
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <Card
          key={item.id}
          className="group hover:bg-sky-500 cursor-pointer border-stone-400 bg-orange-500"
          onClick={() => handleEditClick(item.id)}
        >
          <CardHeader>
            <CardTitle className="group-hover:text-white">
              {item.title}
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              {item.date}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="group-hover:text-white">{item.description}</p>
          </CardContent>
          <CardFooter>
            <p className="group-hover:text-white">{item.auth}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
