/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      {/* <!-- main CTA --> */}
      <section className="">
        <div className="h-[58vh] rounded-b-3xl overflow-hidden md:h-[80vh] bg-[url('/images/bgimg.jpg')] grid place-items-center relative bg-center bg-cover bg-no-repeat px-4">
          <div className="w-full h-full z-10 absolute bg-gradient-to-r from-neutral-800/20 to-neutral-800/20 via-transparent  backdrop-blur-[2px] inset-0"></div>
          <div className="z-20 text-light text-center -mt-14 ">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 tracking-wide ">
              Find Your Perfect Home
            </h2>
            <h3 className="text-sm lg:text-lg font-light mb-6 tracking-wide text-zinc-100">
              Simplify Your Property Search. Instant Results Guaranteed
            </h3>
            <form className="text-dark px-4 rounded-xl flex items-center bg-white">
              <div className="pl-1">
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
              </div>
              <input
                type="text"
                placeholder="Search for your dream house..."
                className="w-full p-3 border-0 focus:ring-0"
              />
            </form>
          </div>
          <div className="absolute z-20 bottom-4">
            <img
              src="/icon/down-arrow.png"
              className="w-12 animate-bounce"
              alt="next down arrow"
            />
          </div>
        </div>
      </section>

      {/* <!-- City property --> */}
      <section className="pt-14 text-lg text-center font-semibold text-dark max-w-6xl mx-auto">
        <h3>Explore properties across</h3>
        <h3 className="mb-10">various top cities</h3>
        <div className="various-properties">
          <div className="various-properties-card">
            <img
              src="/images/bangalore.webp"
              alt="bangalore realverse proptech"
            />
            <span>Bangalore</span>
          </div>
          <div className="various-properties-card">
            <img
              src="/images/hydrabad.webp"
              alt="hyderabad realverse proptech"
            />
            <span>Hyderabad</span>
          </div>
          <div className="various-properties-card">
            <img src="/images/chennai.webp" alt="chennai realverse proptech" />
            <span>Chennai</span>
          </div>
          <div className="various-properties-card">
            <img src="/images/pune.webp" alt="pune realverse proptech" />
            <span>Pune</span>
          </div>
          <div className="various-properties-card">
            <img
              src="/images/mangalore.webp"
              alt="Mangalore realverse proptech"
            />
            <span>Mangalore</span>
          </div>
        </div>
      </section>

      {/* <!-- properties bangalore --> */}
      <section className="pt-14 text-xl text-center font-semibold text-dark max-w-6xl mx-auto">
        <h3>Our finest selection of</h3>
        <h3>properties across Bangalore</h3>
        <p className="text-sm font-light text-primary mb-2">
          Explore the Luxury
        </p>
        <div className="w-full flex justify-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon animate-bounce icon-tabler icon-tabler-corner-right-down-double"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fd0061"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h6a3 3 0 0 1 3 3v7" />
            <path d="M10 10l4 4l4 -4m-8 5l4 4l4 -4" />
          </svg>
        </div>
        <div className="explore-luxury">
          {/* <!-- luxury card starts --> */}
          <div className="explore-luxury-card">
            <div className="explore-luxury-card-top">
              <div className="explore-luxury-card-top-left">
                <h3 className="text-lg">Prestige Park Grove</h3>
                <div className="text-xs font-light flex items-center gap-x-1">
                  <img src="/icon/location.png" className="w-3" />
                  <p>Whitefield, Bangalore</p>
                </div>
                <div className="grid gap-y-px">
                  <div className="text-xs font-normal flex items-center gap-x-1.5">
                    <img src="/icon/bed.png" className="w-5" />
                    <p>1, 2, 3, 4, 5 BHK</p>
                  </div>
                  <div className="text-xs font-normal flex items-center gap-x-1.5">
                    <img src="/icon/ruler.png" className="w-5" />
                    <p>625 - 3500 Sqft</p>
                  </div>
                </div>
                <h2>&#8377; 56,25,000</h2>
              </div>
              <div className="explore-luxury-card-top-right relative">
                <img
                  src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                  alt="banner"
                />
                <div className="absolute top-2 left-2 px-3 py-1 bg-[#646164] font-medium rounded-full text-white text-[11px]">
                  Pre Launch
                </div>
                <span className="absolute top-2 right-2 shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    fill="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <button className="explore-luxury-card-bottom">Details</button>
            </div>
          </div>
          {/* <!-- explore luxury ends  --> */}
        </div>
        <div className="text-sm w-full">
          <button className="flex hover:bg-primary hover:text-white hover:stroke-white items-center justify-between border border-primary pl-6 pr-4 py-1 rounded-xl text-primary font-bold mx-auto">
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-badge-right-filled"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2274A5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"
                stroke-width="0"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* <!-- banner iamge --> */}
      <section className="pt-14 font-semibold text-dark bg-gradient-to-b from-white to-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="overflow-hidden rounded-3xl aspect-w-16 aspect-h-7">
            <img
              src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
              className="object-cover object-center"
              alt="banner image"
            />
          </div>
          <p className="text-center py-6">
            Be The First To Know About The Upcoming Environment Friendly
            Projects Which Lets You Breathe Smoothly
          </p>
        </div>
      </section>

      {/* <!-- hottest selling projects --> */}
      <section className="pt-14 font-semibold text-dark max-w-6xl mx-auto">
        <h3 className="mb-10 text-xl text-center">
          The Hottest Selling Projects
        </h3>
        <div className="hottest-property">
          <figure className="hottest-property-card">
            <div className="hottest-property-card-top">
              {/* <!-- this div is for the layer above image--> */}
              <div></div>
              <img
                src="/images/banner__b369b76e-6505-4812-ab9c-4c2017cf527b.webp"
                alt="banner image"
              />
              <span className="hottest-property-card-top-pre">Pre Launch</span>
              <span className="hottest-property-card-top-save">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  fill="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </span>
            </div>
            <div className="grid gap-y-1 mb-2">
              <div>
                <h3>Prestige Park Grove</h3>
                <div className="text-xs font-light flex items-center gap-x-1">
                  <img
                    src="/icon/location.png"
                    className="w-3"
                    alt="location icon"
                  />
                  <p>Whitefield, Bangalore</p>
                </div>
              </div>
              <div className="grid gap-y-px">
                <div className="text-xs font-normal flex items-center gap-x-1.5">
                  <img src="/icon/bed.png" className="w-5" alt="bed icon" />
                  <p>1, 2, 3, 4, 5 BHK</p>
                </div>
                <div className="text-xs font-normal flex items-center gap-x-1.5">
                  <img src="/icon/ruler.png" className="w-5" alt="ruler icon" />
                  <p>625 - 3500 Sqft</p>
                </div>
              </div>
              <h2>&#8377; 56,25,000</h2>
            </div>
            <div className="mb-1">
              <button className="bg-primary px-8 text-white hover:bg-primary/80 rounded-xl mx-auto block text-sm">
                Details
              </button>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
