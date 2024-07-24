"use client";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-lg">
        We could not process your request. Please try again later.
      </p>
      <button
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => (window.location.href = "/")}
      >
        Go Back to Home
      </button>
    </div>
  );
}
