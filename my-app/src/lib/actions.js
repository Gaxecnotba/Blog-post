const { news } = require("./new.js");
const db = require("./db");
const { NextResponse } = require("next/server");

async function seedPost() {
  try {
    const insertedValues = await db.post.createMany({
      data: news,
      skipDuplicates: true,
    });
    if (insertedValues) {
      console.log("Posts inserted successfully");
    }
  } catch (e) {
    console.error("Error inserting posts:", e);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

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

seedPost();
