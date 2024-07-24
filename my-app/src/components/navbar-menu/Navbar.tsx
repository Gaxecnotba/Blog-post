/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: "Home",
    title: "Home",
    href: "/Home",
  },
  {
    id: "Create Post",
    title: "Create Post",
    href: "#",
  },
  {
    id: "Edit",
    title: "EditPosts",
    href: "/EditPost",
  },
];
export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          Logo
        </Link>
        <nav className="">
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.title}
                </Link>
              ))}
              <li
                className="hover:underline text-[18px]
          font-medium cursor-pointer"
              >
                <Dropdown>
                  <DropdownTrigger>
                    <Button>User</Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem
                      key="account"
                      className="flex w-full text-[20px]"
                    >
                      Account
                    </DropdownItem>
                    <DropdownItem key="posts" className="text-[20px]">
                      Posts
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
