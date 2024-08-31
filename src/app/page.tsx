import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Zustand Demo</h1>
      <div className="flex space-x-4">
        <Link href="/zustand">
          <div
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Zustand
          </div>
        </Link>
        <Link href="/default">
          <div
            className="px-6 py-3 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
          >
            Default
          </div>
        </Link>
      </div>
    </div>
  );
}
