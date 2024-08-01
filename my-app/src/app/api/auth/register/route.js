import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();
    const userFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const usernameFound = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        {
          message: "Username already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedpassword = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedpassword,
      },
    });

    const { password: _, ...user } = newUser;
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error adding user:", error);
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
