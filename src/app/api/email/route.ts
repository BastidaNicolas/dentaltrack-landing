import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!regex.test(body.email)) {
    return new NextResponse(
      JSON.stringify({ message: "Email has incorrect formating." }),
      { status: 400, statusText:"Email has incorrect formating.", headers: { "content-type": "application/json" } }
    );
  }

  try {
    await prisma.email.create({
      data: {
        email: body.email,
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "Email registered successfully." }),
      { status: 200, statusText:"Email registered successfully.", headers: { "content-type": "application/json" } }
    );
  } catch (err: any) {
    if (err.code === "P2002") {
      return new NextResponse(
        JSON.stringify({ message: "Email is already registered." }),
        { status: 409, statusText:"Email is already registered.", headers: { "content-type": "application/json" } }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Something isn't doing good :(." }),
      { status: 500, statusText:"Something isn't doing good :(." ,headers: { "content-type": "application/json" } }
    );
  }
}
