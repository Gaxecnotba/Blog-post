export type PostEdit = {
  id: number;
  title: string;
  author: string;
  publish: Date;
  story: string;
  action: "edit" | "delete";
};

export type Post = {
  id: number;
  auth: string;
  date: string;
  description: string;
  title: string;
};
export type CreatePost = {
  id: number;
  auth: string;
  date: string;
  description: string;
  title: string;
  story: string;
};
