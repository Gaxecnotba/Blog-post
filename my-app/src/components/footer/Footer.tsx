import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t bg-cyan-500 text-white px-20 py-3">
      <div className="container flex h-24 items-center justify-between">
        <p className="text-lg text-muted-foreground">
          &copy; 2024 Blog Post. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-lg font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-lg font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
