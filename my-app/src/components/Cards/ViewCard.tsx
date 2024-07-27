"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { news } from "@/lib/new";

export default function ViewCard({ id }: { id: string }) {
  const newid = id;
  const [card, setCard] = useState([news]);

  useEffect(() => {
    try {
      if (id) {
        const selectedCard = news.find((item) => item.id === newid);
        if (!selectedCard) {
          throw new Error("Card not found");
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  return (
    <>
      <h1>View Card</h1>
      <div className="container mx-auto h-80">
        <Card>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <small>{card.date}</small>
          </CardHeader>
          <CardContent>
            <CardDescription>{card.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <small>Author: {card.auth}</small>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
