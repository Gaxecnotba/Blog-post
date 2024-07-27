"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-lg">
        We could not process your request. Please try again later.
      </p>
      <Link
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
        href={"/"}
      >
        Go Back to Home
      </Link>
    </div>
  );
}
