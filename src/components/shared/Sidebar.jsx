import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg">
      <div className="p-4 text-2xl font-bold text-black">
        <Link href="/" className="text-2xl font-bold text-black">
          BikeShop
        </Link>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/profile"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
