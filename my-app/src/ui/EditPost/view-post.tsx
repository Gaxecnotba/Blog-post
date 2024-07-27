import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/lib/definitions";

export default function ViewPost({ post }: { post: Post }) {
  return (
    <>
      <h1>View Card</h1>
      <div className="container mx-auto h-80">
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <small>{post.date}</small>
          </CardHeader>
          <CardContent>
            <CardDescription>{post.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <small>Author: {post.auth}</small>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
