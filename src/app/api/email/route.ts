import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Define a cache object to store request counts
const requestCounts:any = {};
// Define the rate limit settings
const MAX_REQUESTS = 3; // Maximum number of requests allowed
const TIME_WINDOW = 1 * 60 * 1000; // Time window in milliseconds (e.g., 1 minute)


export async function POST(req: NextRequest) {
  const body = await req.json();

  // Get the IP address of the client making the request
  const clientIP:any = req.headers.get('x-forwarded-for') || req.ip;

  // Get the current timestamp
  const currentTime = Date.now();

  // Check if the IP address exists in the requestCounts cache
  if (!requestCounts[clientIP]) {
    // If the IP address is not in the cache, initialize it with a request count of 1
    requestCounts[clientIP] = {
      count: 1,
      lastRequestTime: currentTime,
    };
  } else {
    // If the IP address is in the cache, update the request count and last request time
    const { count, lastRequestTime } = requestCounts[clientIP];

    // Calculate the time elapsed since the last request
    const elapsedTime = currentTime - lastRequestTime;

    if (elapsedTime <= TIME_WINDOW) {
      // If the time elapsed is within the time window, check if the request count exceeds the maximum
      if (count >= MAX_REQUESTS) {
        // If the request count exceeds the maximum, return a rate limit exceeded response
        return new NextResponse(
          JSON.stringify({ message: "Rate limit exceeded. Please try again later." }),
          { status: 429, statusText:"Rate limit exceeded. Please try again later.", headers: { "content-type": "application/json" } }
        );
      }

      // If the request count is within the limit, increment the count
      requestCounts[clientIP].count += 1;
    } else {
      // If the time elapsed is outside the time window, reset the request count and update the last request time
      requestCounts[clientIP].count = 1;
      requestCounts[clientIP].lastRequestTime = currentTime;
    }
  }

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
