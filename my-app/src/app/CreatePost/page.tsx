"use client";
import SavePost from "@/ui/CreatePost/create-post";
import { useEffect, useState } from "react";
import { createnewPost } from "@/lib/actions";
export default function CreatePost() {
  const [news, setNews] = useState({
    title: "",
    auth: "",
    date: "",
    description: "",
  });
  const handleAddedNews = (newPost: {
    title: string;
    auth: string;
    date: string;
    description: string;
  }) => {
    console.log(newPost);
    setNews(newPost);
  };
  useEffect(() => {
    if (news.title && news.auth && news.date && news.description) {
      const fetchPost = async () => {
        const newpost = await createnewPost({
          title: news.title,
          auth: news.auth,
          date: news.date,
          description: news.description,
        });
        console.log(newpost);
      };
      fetchPost();
    }
  }, [news]);
  return (
    <>
      <SavePost onSave={handleAddedNews} />
    </>
  );
}
