// const { news } = require("./new.js");
// async function seedPost() {
//   try {
//     const insertedValues = await prisma.post.createMany({
//       data: news,
//       skipDuplicates: true,
//     });
//     if (insertedValues) {
//       console.log("Posts inserted successfully");
//     }
//   } catch (e) {
//     console.error("Error inserting posts:", e);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
"use server";

const { revalidatePath } = require("next/cache");

// seedPost()
//   .then(() => {
//     console.log("Seeding finished.");
//     process.exit(0);
//   })
//   .catch((e) => {
//     console.error("Seeding failed:", e);
//     process.exit(1);
//   });

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export async function getBlogpost() {
  try {
    const res = await prisma.post.findMany({
      where: {
        id: 1,
      },
    });
    revalidatePath("http://localhost:3000/Home");
    console.log(res);
    return res;
  } catch {
    (e) => {
      console.error("Seeding failed:", e);
    };
  }
}

export async function getById(pid) {
  const pid1 = parseInt(pid);
  try {
    const res = prisma.post.findUnique({ where: { id: pid1 } });
    revalidatePath(`/View/${pid}`);
    return res;
  } catch (e) {
    console.error("Error fetching posts:", e);
    throw e;
  }
}

export async function createnewPost(auth, date, description, title) {
  try {
    const res = await prisma.post.create({
      data: {
        title: title,
        auth: auth,
        date: date,
        description: description,
      },
      skipDuplicates: true,
    });
    revalidatePath("/CreatePost");
    return res;
  } catch (e) {
    console.error("Error inserting posts:", e);
  }
}

export async function TakePost(clientid) {
  const idc = parseInt(clientid);
  try {
    const selectedPost = await prisma.post.findUnique({
      where: {
        id: idc,
      },
    });

    if (selectedPost) {
      console.log("Post retrieved:", selectedPost);
      return selectedPost;
    } else {
      console.log("Post not found");
      return null;
    }
  } catch (e) {
    console.error("Error retrieving post:", e);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
