import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-50 text-gray-950 flex items-center justify-between px-12 py-5">
      <h1 className="sm:text-2xl text-xl font-bold">
        <Link href="/">CRUD with Firebase</Link>
      </h1>
      <ul className="sm:text-xl flex gap-10 text-lg">
        <li>
          <Link
            href="/"
            className="hover:text-red-600 transition-colors ease-in"
          >
            Links
          </Link>
        </li>
        <li>
          <Link
            href="/add-link"
            className="hover:text-red-600 transition-colors ease-in"
          >
            Add link
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
