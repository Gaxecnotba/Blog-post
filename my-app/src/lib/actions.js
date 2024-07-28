const { PrismaClient } = require("@prisma/client");
const { news } = require("./new.js");

const prisma = new PrismaClient();

async function seedPost() {
  try {
    const insertedValues = await prisma.post.createMany({
      data: news,
      skipDuplicates: true,
    });
    if (insertedValues) {
      console.log("Posts inserted successfully");
    }
  } catch (e) {
    console.error("Error inserting posts:", e);
    process.exit(1); // Exit with error code
  } finally {
    await prisma.$disconnect();
  }
}

seedPost()
  .then(() => {
    console.log("Seeding finished.");
    process.exit(0); // Exit without error code
  })
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1); // Exit with error code
  });

// export async function TakePost(clientid) {
//   try {
//     const selectedPost = await db.post.findUnique({
//       where: {
//         id: clientid,
//       },
//     });

//     if (selectedPost) {
//       console.log("Post retrieved:", selectedPost);
//       return selectedPost;
//     } else {
//       console.log("Post not found");
//       return null;
//     }
//   } catch (e) {
//     console.error("Error retrieving post:", e);
//     return NextResponse.json(
//       {
//         message: "Internal server error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
