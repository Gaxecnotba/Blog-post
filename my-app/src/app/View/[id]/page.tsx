"use client";

import { useEffect, useState } from "react";
import ViewPost from "@/ui/EditPost/view-post";
import { useSession } from "next-auth/react";
import { UpdatePost, DeletePost } from "@/ui/EditPost/buttons";
import { getById } from "@/lib/actions";

export default function Post({ params }: { params: { id: number } }) {
  const { data: session } = useSession();
  const [selectedPost, setSelectedPost] = useState({});
  const id: number = params.id;

  useEffect(() => {
    async function fetchPost() {
      const post = await getById(id);
      console.log(post);
      setSelectedPost(post);
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
            <UpdatePost id={selectedPost.id} />{" "}
            <DeletePost id={selectedPost.id} />
          </div>
        </>
      )}
    </div>
  );
}
