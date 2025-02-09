import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              BikeShop
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/" className="text-black hover:text-primary px-3 py-2">
              Home
            </Link>
            <Link
              href="/products"
              className="text-black hover:text-primary px-3 py-2"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-primary px-3 py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-primary px-3 py-2"
            >
              Contact
            </Link>
            <Link
              href="/dashboard"
              className="text-black hover:text-primary px-3 py-2"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
