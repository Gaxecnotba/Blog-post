export type PostEdit = {
  id: number;
  title: string;
  author: string;
  publish: Date;
  action: "edit" | "delete";
};

export type Post = {
  id: string;
  auth: string;
  date: string;
  description: string;
  title: string;
};

export type ViewPost = {
  id: string;
  auth: string;
  date: string;
  description: string;
  title: string;
};
