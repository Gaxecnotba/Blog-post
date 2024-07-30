import Link from "next/link"; // Use Next.js Link

export function UpdatePost({ id }: { id: number }) {
  return (
    <div className="">
      <Link href={`/EditPost/${id}/edit`} passHref>
        <button className=" bg-green-600 rounded-full">Edit Post</button>
      </Link>
    </div>
  );
}

export function CreatePost() {
  return (
    <div>
      <Link href="/CreatePost" passHref>
        <button className="bg-orange-500 rounded-full">Create Post</button>
      </Link>
    </div>
  );
}

import { deletePost } from "@/lib/actions";
import { useRouter } from "next/navigation";

export function DeletePost({ id }: { id: number }) {
  const pid: number = id;
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const postdeleted = await deletePost(pid);
      if (postdeleted) {
        router.push("/Home");
        console.log("Post Deleted");
      }
    } catch (error) {
      console.log("Error Deleting Post", error);
    }
  };
  return (
    <div>
      <button className="bg-red-500 rounded-full" onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  );
}
