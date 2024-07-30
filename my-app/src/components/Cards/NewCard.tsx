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
      <div>
        <Card className="group hover:bg-sky-500 cursor-pointer border-stone-400 bg-orange-500">
          <CardHeader>
            <CardTitle className="group-hover:text-white">
              {data.title}
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              {data.date}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{data.description}</p>
          </CardContent>
          <CardFooter>
            <p className="group-hover:text-white">Author: {data.auth}</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
