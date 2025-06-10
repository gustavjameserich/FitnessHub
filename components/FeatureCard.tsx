"use client";
import Link from "next/link";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
}

export default function FeatureCard({
  title,
  description,
  href,
  imgSrc,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="block bg-gray-800 rounded-lg shadow hover:shadow-lg overflow-hidden"
    >
      <div className="relative w-full h-40">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg text-gray-200 font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
