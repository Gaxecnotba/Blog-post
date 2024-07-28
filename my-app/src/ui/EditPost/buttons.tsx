import { Button } from "@nextui-org/react";
import Link from "next/link"; // Use Next.js Link

export function UpdatePost({ id }: { id: string }) {
  return (
    <div>
      <Link href={`/EditPost/${id}/edit`} passHref>
        <Button as="a" color="primary">
          Edit Post
        </Button>
      </Link>
    </div>
  );
}

export function CreatePost() {
  return (
    <div>
      <Link href="/CreatePost" passHref>
        <Button as="a" color="primary">
          Create Post
        </Button>
      </Link>
    </div>
  );
}

export function DeletePost({ id }: { id: number }) {
  // Implementation needed or remove this component if unnecessary
  return <></>;
}
