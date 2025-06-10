"use client";
import Link from "next/link";

interface Workout {
  title: string;
  description: string;
  duration: string;
  href: string;
  imgSrc: string;
}

export default function WorkoutCard({
  title,
  description,
  duration,
  href,
}: Workout) {
  return (
    <Link
      href={href}
      className="block flex border-2 border-black bg-gray-800 rounded-lg shadow hover:shadow-lg overflow-hidden transition-shadow duration-200"
    >
      <div className="p-4">
        <h3 className="text-xl text-gray-200 font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 mb-2">{description}</p>
        <div className=" justify-between text-sm text-gray-500">
          <span>{duration}</span>
        </div>
      </div>
    </Link>
  );
}
