import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  // get the body data from the request
  const body = await request.json();
  const { email, name, password } = body;

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create the user in the database
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
