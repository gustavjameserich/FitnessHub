"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Fitness Hub
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/boxing">Boxing</Link>
        </li>
        <li>
          <Link href="/lifting">Lifting</Link>
        </li>
        <li>
          <Link href="/running">Running</Link>
        </li>
        <li>
          <Link href="/swimming">Swimming</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
}
