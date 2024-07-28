"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  description: string;
  auth: string;
};

type CardsProps = {
  news: NewsItem[];
  onEditClick: (id: string) => void;
};
import NewCard from "./NewCard";

export default function Cards({ news, onEditClick }: CardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <Card
          key={item.id}
          className="group hover:bg-sky-500 cursor-pointer"
          onClick={() => onEditClick(item.id)}
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
