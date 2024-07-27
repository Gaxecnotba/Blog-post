"use client";

import { useEffect, useState } from "react";
import ViewPost from "@/ui/EditPost/view-post";
import { news } from "@/lib/new";

export default function Post({ params }: { params: { id: string } }) {
  const [selectedPost, setSelectedPost] = useState({});
  const id: string = params.id;
  console.log(id);
  useEffect(() => {
    const post = news.find((item) => item.id === id);
    if (post) {
      setSelectedPost(post);
    } else {
      console.error("Card not found");
    }
  }, [id]);
  return <ViewPost post={selectedPost} />;
}
