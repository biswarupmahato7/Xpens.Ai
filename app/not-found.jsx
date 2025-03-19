import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-fadeIn">
      {/* 404 Title with Gradient Effect */}
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
        404
      </h1>

      {/* Subheading */}
      <h2 className="text-2xl text-red-500 font-semibold mt-2 mb-4">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-600 max-w-md mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Return Home Button */}
      <Link href="/">
        <Button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80 rounded-lg shadow-md transition-all duration-300">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
