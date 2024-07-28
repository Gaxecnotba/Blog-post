/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

const navLinks = [
  {
    id: "Home",
    title: "Home",
    href: "/Home",
  },
  {
    id: "Create Post",
    title: "Create Post",
    href: "/CreatePost",
  },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-gray-950 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-24 py-3 text-white">
        <Link href="/" className="text-xl font-bold">
          Blog Post
        </Link>
        <nav>
          <ul className="flex gap-x-2">
            {!session ? (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/auth/login">Login</Link>
                </li>
                <li>
                  <Link href="/auth/register">Register</Link>
                </li>
                <li>
                  <Link href="/Home">View News</Link>
                </li>
              </>
            ) : (
              <>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
                <li>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button>User</Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem key="account" className="text-[18px]">
                        Account
                      </DropdownItem>
                      <DropdownItem key="posts" className="text-[18px]">
                        Posts
                      </DropdownItem>
                      <DropdownItem
                        key="logout"
                        className="text-[18px]"
                        onClick={() => signOut()}
                      >
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
