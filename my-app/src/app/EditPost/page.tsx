"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { data } from "@/app/EditPost/news";
import PostTable from "@/components/table/table";

export default function Page() {
  return (
    <main>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts</CardTitle>
            <CardDescription>
              View, edit, and delete your blog posts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PostTable news={data} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
