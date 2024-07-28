"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreatePost } from "@/lib/definitions";

export default function NewCard({ data }: { data: CreatePost }) {
  return (
    <>
      <h1>View Card</h1>
      <div className="container mx-auto h-80">
        <Card>
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <small>{data.date}</small>
          </CardHeader>
          <CardContent>
            <CardDescription>{data.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <small>Author: {data.auth}</small>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
