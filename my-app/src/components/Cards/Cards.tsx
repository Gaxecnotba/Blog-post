"use client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";

interface CardsProps {
  id: number;
  title: string;
  date: string;
  description: string;
  auth: string;
}
import NewCard from "./NewCard";
import { Key } from "react";

export default function Cards({
  id,
  title,
  date,
  description,
  auth,
}: CardsProps) {
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
      <Card
        key={id}
        className="group hover:bg-sky-500 cursor-pointer"
        onClick={() => handleEditClick(id)}
      >
        <CardHeader>
          <CardTitle className="group-hover:text-white">{title}</CardTitle>
          <CardDescription className="group-hover:text-white">
            {date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="group-hover:text-white">{description}</p>
        </CardContent>
        <CardFooter>
          <p className="group-hover:text-white">{auth}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
