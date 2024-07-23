export type PostEdit = {
  id: number;
  title: string;
  author: string;
  publish: Date;
  action: "edit" | "delete";
};

export type Post = {
  id: number;
  title: string;
  description: string;
  date: Date;
};
