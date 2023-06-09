import Link from 'next/link';
import { useRouter } from 'next/router';

/* eslint-disable @next/next/no-img-element */
function Header() {
  const router = useRouter();
  return (
    <header className="shadow-md sticky top-0 z-50 bg-white w-full text-dark">
      <nav className="max-w-6xl mx-auto flex justify-between items-center gap-x-16 py-3 px-4 md:px-8">
        <div className="flex items-center flex-1 gap-x-4">
          <Link href="/">
            <img
              src="/icon/realverse-icon.png"
              className="w-16"
              alt="Realverse Icon"
            />
          </Link>
          <form className="border border-primary text-dark flex w-full items-center rounded-lg pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6f32be"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input
              type="text"
              placeholder="Search your dream house"
              className="focus:outline-none py-2 w-full rounded-lg border-0 focus:ring-0"
            />
          </form>
          <div className="block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#6f32be"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </div>
        <ul className="hidden lg:flex items-center gap-x-4 text-lg font-medium ">
          <Link
            href="/properties/all"
            className={`custom-link ${
              router.pathname === '/properties/all' && 'underline text-primary'
            }`}
          >
            <li>Properties is</li>
          </Link>
          <Link
            href="/properties/all/ready-to-move"
            className={`custom-link ${
              router.pathname === '/properties/all/ready-to-move' &&
              'underline text-primary'
            }`}
          >
            <li>Ready To Move</li>
          </Link>
          <Link
            href="/properties/all/under-construction"
            className={`custom-link ${
              router.pathname === '/properties/all/under-construction' &&
              'underline text-primary'
            }`}
          >
            <li>Under Construction</li>
          </Link>
          <Link
            href="/properties/all/pre-launch"
            className={`custom-link ${
              router.pathname === '/properties/all/pre-launch' &&
              'underline text-primary'
            }`}
          >
            <li>Pre Launch</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
