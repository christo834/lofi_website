import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white p-4 fixed top-0 left-0 w-full flex justify-center items-center">
      <div className="flex space-x-10">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/weeb" className="hover:text-gray-300">
          Weeb
        </Link>
        <Link href="/chill" className="hover:text-gray-300">
          Bing chilling
        </Link>
        <Link href="/smodge" className="hover:text-gray-300">
          Smodge
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
