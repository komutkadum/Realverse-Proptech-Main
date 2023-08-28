/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-primary text-white py-14 mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* <!-- main footer --> */}
        <div className="grid grid-cols-12 mb-16 gap-y-8">
          <div className="col-span-12 lg:col-span-2 flex items-start justify-center ">
            <img
              src="/icon/realverse-icon.png"
              className="w-28"
              alt="realverse icon"
            />
          </div>
          <div className="col-span-12 lg:col-span-10 gap-y-8 grid grid-cols-1 md:grid-cols-4 text-center md:text-left justify-center">
            <div className="flex justify-center">
              <ul>
                <Link href="/properties/all" className="dark-custom-link">
                  <li className="mb-2">Properties</li>
                </Link>
                <Link
                  href="/properties/all/ready-to-move"
                  className="dark-custom-link"
                >
                  <li className="mb-2">Ready To Move</li>
                </Link>
                <Link
                  href="/properties/all/under-construction"
                  className="dark-custom-link"
                >
                  <li className="mb-2">Under Construction</li>
                </Link>
                <Link
                  href="/properties/all/pre-launch"
                  className="dark-custom-link"
                >
                  <li>Pre Launch</li>
                </Link>
              </ul>
            </div>
            <div className="flex justify-center ">
              <ul className="grid justify-center">
                <Link href="/properties/bangalore" className="dark-custom-link">
                  <li className="mb-2">BANGALORE</li>
                </Link>
                <Link href="/properties/hyderabad" className="dark-custom-link">
                  <li className="mb-2">HYDERABAD</li>
                </Link>
                <Link href="/properties/chennai" className="dark-custom-link">
                  <li className="mb-2">CHENNAI</li>
                </Link>
                <Link href="/properties/pune" className="dark-custom-link">
                  <li className="mb-2">PUNE</li>
                </Link>
                <Link href="/properties/mumbai" className="dark-custom-link">
                  <li>MUMBAI</li>
                </Link>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul>
                <li className="mb-2">Blogs</li>
                <Link href="/about" className="dark-custom-link">
                  <li className="mb-2">About</li>
                </Link>
                <Link href="/contact" className="dark-custom-link">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul>
                <li className="mb-2">+918069428000</li>
                <li>realverseproptech@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- disclaimer --> */}
        <div className="mb-12 text-xs md:text-sm tracking-wide">
          This Website Is In The Process Of Being Updated. By Accessing This
          Website, The Viewer Confirms That The Information Including Brochures
          And Marketing Collaterals On This Website Are Solely For Informational
          Purposes Only And The Viewer Has Not Relied On This Information For
          Making Any Booking/Purchase In Any Project Of The Company. Nothing On
          This Website, Constitutes Advertising, Marketing, Booking, Selling Or
          An Offer For Sale, Or Invitation To Purchase A Unit In Any Project By
          The Company. The Company Is Not Liable For Any Consequence Of Any
          Action Taken By The Viewer Relying On Such Material Information On
          This Website.
        </div>
        <div className="flex flex-col text-xs text-center items-center gap-y-4 lg:flex-row justify-between">
          <div className="hidden lg:block">
            © newpropertydetails.com - All rights reserved
          </div>
          <ul className="flex flex-wrap justify-center gap-x-4 whitespace-nowrap">
            <li>Term of Use</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Site Map</li>
          </ul>
          <div className="block lg:hidden text-zinc-300">
            © newpropertydetails.com - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
