"use client";

import { useEffect, useState } from "react";
import ViewPost from "@/ui/EditPost/view-post";
import { news } from "@/lib/new";
import { useSession } from "next-auth/react";
import { UpdatePost, CreatePost } from "@/ui/EditPost/buttons";
import { getById } from "@/lib/actions";

export default function Post({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const [selectedPost, setSelectedPost] = useState({});
  const id: string = params.id;
  console.log(id);
  // const checkid =getById(id);
  // const selectedById= async()=>{
  //   if(id == await checkid){

  //   }
  // }
  useEffect(() => {
    const post = news.find((item: { id: string }) => item.id === id);
    if (post) {
      setSelectedPost(post);
    } else {
      console.error("Card not found");
    }
  }, [id]);
  return (
    <div>
      {!session ? (
        <ViewPost post={selectedPost} />
      ) : (
        <>
          <ViewPost post={selectedPost} />
          <UpdatePost id={id} /> <CreatePost />
        </>
      )}
    </div>
  );
}
