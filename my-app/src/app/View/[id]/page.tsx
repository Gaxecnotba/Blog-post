"use client";

import { useEffect, useState } from "react";
import ViewPost from "@/ui/EditPost/view-post";
import { useSession } from "next-auth/react";
import { UpdatePost, DeletePost } from "@/ui/EditPost/buttons";
import { getById } from "@/lib/actions";

export default function Page({ params }: { params: { id: number } }) {
  const { data: session } = useSession();
  interface Post {
    id: string;
    auth: string;
    date: string;
    description: string;
    title: string;
  }

  const [selectedPost, setSelectedPost] = useState<Post>({
    id: "",
    auth: "",
    date: "",
    description: "",
    title: "",
  });
  const id: number = params.id;

  useEffect(() => {
    async function fetchPost() {
      const post = getById(id);
      console.log(post);
      setSelectedPost(post as unknown as Post);
    }
    fetchPost();
  }, [id]);

  return (
    <div>
      {!session ? (
        <ViewPost post={selectedPost} />
      ) : (
        <>
          <ViewPost post={selectedPost} />
          <div className="flex justify-center p-5">
            <UpdatePost id={parseInt(selectedPost.id)} />{" "}
            <DeletePost id={parseInt(selectedPost.id)} />
          </div>
        </>
      )}
    </div>
  );
}
