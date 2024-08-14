"use server";

import prisma from "./db.js";

const { revalidatePath } = require("next/cache");

export async function getBlogpost() {
  try {
    const res = await prisma.post.findMany();
    revalidatePath("/Home");
    console.log("es esto?:", res);
    return res;
  } catch {
    (e) => {
      console.error("failed to create new post:", e);
    };
  }
}

export async function getById(pid) {
  const pid1 = parseInt(pid);
  try {
    const res = await prisma.post.findUnique({ where: { id: pid1 } });
    console.log("esto es res:", res);
    return res;
  } catch (e) {
    console.error("Error fetching posts:", e);
    throw e;
  }
}

export async function createnewPost(title, auth, date, description) {
  try {
    const res = await prisma.post.create({
      data: {
        title,
        auth,
        date,
        description,
      },
    });
    // revalidatePath("/Home");
    console.log("esto es res new post:", res);
    return res;
  } catch (e) {
    console.error("Error inserting posts:", e);
  }
}

export async function updatePost({ id, title, auth, date, description }) {
  try {
    const updatedPost = await prisma.post.update({
      where: { id },
      data: { title, auth, date, description },
    });
    revalidatePath("/Home");
    console.log("Post updated:", updatedPost);
    return updatedPost;
  } catch (e) {
    console.error("Error updating post:", e);
  }
}

export async function deletePost(pid) {
  try {
    const deletedPost = await prisma.post.delete({ where: { id: pid } });
    revalidatePath("/Home");
    console.log("Post deleted:", deletedPost);
    return deletedPost;
  } catch (e) {
    console.error("Error deleting post:", e);
  }
}
